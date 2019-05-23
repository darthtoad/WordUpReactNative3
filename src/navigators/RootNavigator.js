import LogInScreen from './../screens/LogInScreen';
import SignUpScreen from './../screens/SignUpScreen';
import SavedScreen from './../screens/SavedScreen';
import WelcomeScreen from './../screens/WelcomeScreen';
import DefinitionScreen from './../screens/DefinitionScreen';

import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';

export const AuthNavigator = createStackNavigator({
    LogIn: { screen: LogInScreen },
    SignUp: { screen: SignUpScreen },
})

export const MainNavigator = createBottomTabNavigator({
    Saved: { screen: SavedScreen },
    Welcome: { screen: WelcomeScreen },
    Definition: { screen: DefinitionScreen },
})

export const RootNavigator = createStackNavigator({
    Auth: { screen: AuthNavigator },
    Main: { screen: MainNavigator },
})

export default RootNavigator;