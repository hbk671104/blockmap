import { createAppContainer, createStackNavigator } from 'react-navigation'

import Map from 'container/map'
import Exchange from 'container/exchange'
import Country from 'container/country'

const AppNavigator = createStackNavigator({
    Map
})

export default createAppContainer(AppNavigator)
