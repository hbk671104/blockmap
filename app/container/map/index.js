import React, { PureComponent } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import R from 'ramda'

import styles from './style'

class Map extends PureComponent {
    static navigationOptions = {
        title: 'Blockchain World Map'
    }

    componentDidMount() {
        // const { data } = this.props
        // this.props.dispatch({ type: 'device/markItemRead', payload: data.id })
    }

    render() {
        return (
            <View>
                <Text>张嘿嘿</Text>
            </View>
        )
    }
}

export default connect()(Map)
