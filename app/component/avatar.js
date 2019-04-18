import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { raised as raisedStyle } from 'util/style'

const avatar = ({
    style,
    imageStyle,
    size,
    source,
    raised,
    resizeMode,
    innerRatio
}) => {
    return (
        <View
            style={[
                styles.container,
                {
                    height: size,
                    width: size,
                    borderRadius: size / 2
                },
                raised && { ...raisedStyle },
                style
            ]}
        >
            <Image
                {...this.props}
                resizeMode={resizeMode}
                source={source}
                style={[
                    {
                        height: size * innerRatio,
                        width: size * innerRatio,
                        borderRadius: (size * innerRatio) / 2
                    },
                    imageStyle
                ]}
            />
        </View>
    )
}

const styles = {
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

avatar.defaultProps = {
    size: 42,
    innerRatio: 2 / 3,
    resizeMode: 'contain',
    raised: true
}

avatar.propTypes = {
    size: PropTypes.number,
    innerRatio: PropTypes.number,
    resizeMode: PropTypes.string,
    raised: PropTypes.bool
}

export default avatar
