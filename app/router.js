import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'
import { useScreens } from 'react-native-screens'

import Landing from 'container/landing'
import Map from 'container/map'
import Exchange from 'container/exchange'

useScreens()

const MainNavigator = createStackNavigator({
    Map,
    Exchange
})

const AppNavigator = createSwitchNavigator({
    Landing,
    Main: MainNavigator
})

export default createAppContainer(AppNavigator)
