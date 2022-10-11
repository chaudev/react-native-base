import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React, {FC, useState} from 'react'
import {Controller} from 'react-hook-form'
import {TInputController} from '../controller'

const Input: FC<TInputController> = props => {
  const {label, name, placeholder, control, disabled, required = true, hideError = false, onEnter} = props
  const {style, errors, wrapStyle, isPassword} = props

  const [showPassword, setShowPassword] = useState(isPassword)

  return (
    <View style={!!wrapStyle ? {...wrapStyle} : {}}>
      <Text style={styles.lable}>{label} </Text>
      <View style={{...styles.wrapInput, ...style}}>
        <Controller
          control={control}
          rules={{required: required}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              secureTextEntry={showPassword ? true : false}
              editable={!disabled}
              placeholder={placeholder}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              onEndEditing={onEnter}
            />
          )}
          name={name}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            activeOpacity={0.5}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
            }}>
            {showPassword ? <Text>Hide</Text> : <Text>Show</Text>}
          </TouchableOpacity>
        )}
      </View>

      {!hideError && errors && <Text style={{color: 'red', marginTop: 5}}>Không được bỏ trống</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 6,
    paddingHorizontal: 16,
    height: 50,
    flex: 1,
  },
  wrapInput: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    flexDirection: 'row',
  },
  lable: {
    color: '#000',
    marginBottom: 8,
    fontSize: 16,
  },
})

export default Input
