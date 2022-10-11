import React, {FC, useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Signin from '~/views/auth/signin'
import {useGlobalContext} from '~/provider/AppProvider'
import SplashScreen from 'react-native-splash-screen'
import HomeScreen from '~/views/home'
import TabNavigator from './tab-nagivator'

const Stack = createNativeStackNavigator<TRootNavigator>()

const RootNavigator = () => {
  const {mainLoading, user} = useGlobalContext()

  useEffect(() => {
    if (!mainLoading) {
      SplashScreen.hide()
    }
  }, [mainLoading])

  console.log('-- user: ', user)

  if (!user?.token) {
    return <Signin />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="RootTabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
