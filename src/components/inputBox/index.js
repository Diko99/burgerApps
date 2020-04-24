import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const InputBox = () => {
  return (
    <View style={styles['container']}>
      <SingleInputBox />
    </View>
  )
}
const SingleInputBox = () => {
  return (
    <View style={styles['container']}>
      <EvilIcons
        name='envelope'
        color='#727c8e'
        size={22}
        style={styles['icon']}
      />
      <TextInput
        placeholder='Email Address'
        placeholderTextColor='#727c8e'
        style={styles['input-box']}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    overflow: 'hidden', // ketika keluar dari ukuran maka otomatis kehidden
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  icon: {
    marginRight: 10,
    marginLeft: 20
  },
  'input-box': {
    flex: 1,
    height: 45,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#727c8e',
    includeFontPadding: false,
    paddingRight: 30
  }
})

export default InputBox
