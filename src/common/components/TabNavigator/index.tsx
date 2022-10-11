import {RecyclerViewBackedScrollViewComponent, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tabs = ({route, focused}: {route: any; focused: boolean}) => {
  console.log('route: ', route)

  let iconName

  if (route.name === 'Home') {
    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
  } else if (route.name === 'Settings') {
    iconName = focused ? 'ios-list-box' : 'ios-list'
  }

  // You can return any component that you like here!
  return <Ionicons name={iconName + ''} size={20} color="#000" />
}

export default Tabs

const styles = StyleSheet.create({})
