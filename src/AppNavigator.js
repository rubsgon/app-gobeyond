import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppNavigator = () => {
    const { Navigator, Screen } = createStackNavigator()

  return (
    <NavigationContainer>
        <Navigator>
            <Screen name="Home" component={Home} />
        </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator