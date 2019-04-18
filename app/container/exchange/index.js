import React, { PureComponent } from 'react'
import { View, Text, FlatList, Linking } from 'react-native'
import { connect } from 'react-redux'
import R from 'ramda'

import ExchangeItem from './component/item'
import styles from './style'

class Exchange extends PureComponent {
    static navigationOptions = ({ navigation }) => {
        const country = navigation.getParam('country')
        return {
            title: country
        }
    }

    renderItem = ({ item }) => (
        <ExchangeItem
            data={item}
            onPress={() => Linking.openURL(R.path(['url'])(item))}
        />
    )

    renderSeparator = () => <View style={styles.separator} />

    render() {
        const { data } = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={item => `${item.id}`}
                />
            </View>
        )
    }
}

export default connect(({ exchange }, { navigation }) => {
    const country = navigation.getParam('country')
    return {
        data: R.pipe(
            R.pathOr([], ['data', country]),
            R.sort(R.descend(R.prop('trade_volume_24h_btc')))
        )(exchange)
    }
})(Exchange)
