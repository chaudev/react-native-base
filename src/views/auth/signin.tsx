import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import LoginForm from '~/common/components/auth/login-form'

const Signin = () => {
  async function onLogin() {}

  return (
    <View style={styles.container}>
      <LoginForm onLogin={onLogin} />
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    flex: 1,
  },
})
