import {View, Text} from 'react-native'
import React, {FC} from 'react'

type ILoginForm = {
  onLogin: Function
}

const LoginForm: FC<ILoginForm> = ({onLogin}) => {
  return (
    <View>
      <Text>LoginForm</Text>
    </View>
  )
}

export default LoginForm
