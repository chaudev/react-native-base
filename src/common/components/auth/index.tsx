import {View, Text} from 'react-native'
import React, {FC} from 'react'
import Input from '../Controller/Input'
import {useForm, Controller} from 'react-hook-form'
import Button from '../Button'

type ILoginForm = {
  onLogin: Function
}

const LoginForm: FC<ILoginForm> = ({onLogin}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userName: '',
      password: '',
    },
  })

  const onSubmit = (data: {userName: string; password: string}) => {
    console.log(data)

    onLogin(data)
  }

  return (
    <View style={{marginTop: 30}}>
      <Input control={control} name="userName" label="Tài khoản" errors={errors.userName} />
      <Input control={control} name="password" label="Mật khẩu" isPassword errors={errors.password} wrapStyle={{marginTop: 16}} />
      <Button text="Đăng nhập" onPress={handleSubmit(onSubmit)} style={{marginTop: 16}} />
    </View>
  )
}

export default LoginForm
