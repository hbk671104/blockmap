import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'

import Landing from 'container/landing'
import Map from 'container/map'
import Exchange from 'container/exchange'

const MainNavigator = createStackNavigator({
    Map,
    Exchange
})

const AppNavigator = createSwitchNavigator({
    Landing,
    Main: MainNavigator
})

export default createAppContainer(AppNavigator)
