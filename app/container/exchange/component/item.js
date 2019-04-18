import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { human, iOSColors } from 'react-native-typography'
import R from 'ramda'
import Accounting from 'accounting'

import Avatar from 'component/avatar'

const exchangeItem = ({ data, onPress }) => {
    const name = R.path(['name'])(data)
    const desc = R.path(['description'])(data)
    const image = R.path(['image'])(data)
    const trade_volume_24h_btc = R.pathOr(0, ['trade_volume_24h_btc'])(data)
    const year_established = R.path(['year_established'])(data)

    // const temperature = R.pathOr(0, ['temperature'])(data)
    // const cpu_usage = R.pathOr(0, ['cpu_usage'])(data)
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Avatar size={48} source={{ uri: image }} />
            <View style={styles.content.container}>
                <View style={styles.content.upper.container}>
                    <Text style={styles.content.upper.title}>
                        {name}{' '}
                        {!!year_established && (
                            <Text style={styles.content.upper.founded}>
                                ({year_established})
                            </Text>
                        )}
                    </Text>
                </View>
                {!!desc && (
                    <View style={styles.content.desc.container}>
                        <Text style={styles.content.desc.text}>{desc}</Text>
                    </View>
                )}
                <View style={styles.content.volume.container}>
                    <Image source={require('./BTC.png')} />
                    <Text style={styles.content.volume.text}>
                        {' '}
                        {Accounting.formatNumber(trade_volume_24h_btc)}
                        <Text style={styles.content.volume.day}> / day</Text>
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = {
    container: {
        flexDirection: 'row',
        // alignItems: 'center',
        padding: 12
    },
    avatar: {
        height: 36,
        width: 36,
        borderRadius: 18
    },
    content: {
        container: {
            flex: 1,
            marginLeft: 12
        },
        upper: {
            container: {
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            title: {
                ...human.title3Object
            },
            founded: {
                ...human.caption2Object
            }
        },
        desc: {
            container: {
                marginTop: 8
            },
            text: {
                ...human.caption1Object,
                lineHeight: 18,
                color: iOSColors.gray
            }
        },
        volume: {
            container: {
                marginTop: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end'
            },
            text: {
                ...human.calloutObject
            },
            day: {
                ...human.caption1Object
            }
        }
    }
}

export default exchangeItem
