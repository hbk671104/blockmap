import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

import styles from './style'

class Country extends PureComponent {
    static navigationOptions = {
        title: '国家'
    }

    render() {
        return (
            <View>
                <Text>国家</Text>
            </View>
        )
    }
}

export default Country
