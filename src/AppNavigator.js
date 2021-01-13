import React from 'react';
import { Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import iconHome from './images/iconHome.png'
import iconMyAccount from './images/iconMyAccount.png'

import Home from './modules/Home'
import MyAccount from './modules/MyAccount'

const AppNavigator = () => {
    const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <NavigationContainer>
        <Navigator
          initialRouteName="Home"
          headerMode="none"
          tabBarOptions={{
            activeTintColor: '#000',
            inactiveTintColor: '#666'
          }}
        >
            <Screen 
              name="Home" 
              component={Home} 
              options={{
                tabBarIcon: () => (
                  <Image resizeMode="contain" style={{ height: 25 }} source={iconHome} />
                )
              }}  
            />
            <Screen name="MyAccount" component={MyAccount} 
              options={{
                title: 'Minha Conta',
                tabBarIcon: () => (
                  <Image resizeMode="contain" style={{ height: 25 }} source={iconMyAccount} />
                )
              }}  
            />
        </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator