import React, { PureComponent } from 'react'
import { persist } from '../../index'

class Landing extends PureComponent {
    componentWillMount() {
        persist(this.init)
    }

    init = () => {
        this.props.navigation.navigate('Main')
        // splash come off
    }

    render() {
        return null
    }
}

export default Landing
