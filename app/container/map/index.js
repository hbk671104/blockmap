import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MapView, { Marker, Callout } from 'react-native-maps'
import R from 'ramda'
import coordinate from 'util/coordinate.json'

import styles from './style'

class Map extends PureComponent {
    static navigationOptions = {
        title: 'Blockchain World Map'
    }

    componentDidMount() {
        this.props.dispatch({ type: 'exchange/fetch' })
        this.getCurrentPosition()
    }

    getCurrentPosition = () => {
        try {
            navigator.geolocation.getCurrentPosition(position => {
                this.map.animateCamera({
                    center: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                })
            })
        } catch (e) {
            alert(e.message || '')
        }
    }

    goToExchange = country => () => {
        this.props.navigation.navigate('Exchange', {
            country
        })
    }

    renderMarker = c => {
        const { data } = this.props
        const obj = R.pathOr({}, [c])(coordinate)
        const number_of_exchange = R.pipe(
            R.path([c]),
            R.length
        )(data)
        return (
            <Marker
                key={JSON.stringify(obj)}
                title={c}
                description={`${number_of_exchange} exchange${
                    number_of_exchange === 1 ? '' : 's'
                }`}
                coordinate={{
                    longitude: obj.lng,
                    latitude: obj.lat
                }}
                pinColor={styles.pinColor(number_of_exchange)}
                onCalloutPress={this.goToExchange(c)}
            />
        )
    }

    render() {
        const { data } = this.props
        return (
            <MapView
                ref={map => {
                    this.map = map
                }}
                style={styles.container}
                showsUserLocation
            >
                {R.pipe(
                    R.keys,
                    R.map(this.renderMarker)
                )(data)}
            </MapView>
        )
    }
}

export default connect(({ exchange }) => ({
    data: R.pathOr({}, ['data'])(exchange)
}))(Map)
