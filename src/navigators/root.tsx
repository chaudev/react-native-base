import React, {FC} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Signin from '~/views/auth/signin'

const Stack = createNativeStackNavigator<TRootNavigator>()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
