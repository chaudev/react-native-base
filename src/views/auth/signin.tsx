import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import LoginForm from '~/common/components/Auth/login-form'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

const Signin = () => {
  const insets = useSafeAreaInsets()

  async function onLogin() {}

  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
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
  },
})
