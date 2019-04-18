import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

import styles from './style'

class Exchange extends PureComponent {
    static navigationOptions = {
        title: '交易所'
    }

    render() {
        return (
            <View>
                <Text>交易所</Text>
            </View>
        )
    }
}

export default Exchange
