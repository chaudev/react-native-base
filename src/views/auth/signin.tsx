import {View, Text, StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import LoginForm from '~/common/components/Auth/login-form'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import appConfigs from '~/configs'
import {useGlobalContext} from '~/provider/AppProvider'

const Signin = () => {
  const insets = useSafeAreaInsets()

  const {setUser} = useGlobalContext()

  async function onLogin(params: any) {
    !!setUser && setUser({token: 'conmeno'})
  }

  return (
    <View style={[styles.container, {paddingTop: insets.top + 16}]}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.textTitle}>Đăng nhập</Text>
      <Text style={styles.textTitle}>Logo</Text>

      <LoginForm onLogin={onLogin} />
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
    padding: 16,
  },
  textTitle: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: appConfigs.fonts.Bold,
  },
})
