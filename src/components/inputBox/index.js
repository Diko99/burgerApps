import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TextInput } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const InputBox = (props) => {
  return (
    <View style={styles[props.styleBox]}>
      <EvilIcons
        name={props.nameIcon}
        color={props.colorIcon}
        size={props.size}
        style={styles[props.styleIcon]}
      />
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        style={styles[props.styleTextInput]}
      />
    </View>
  )
}

InputBox.propTypes = {
  styleBox: PropTypes.string,
  nameIcon: PropTypes.string,
  colorIcon: PropTypes.string,
  styleIcon: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  styleTextInput: PropTypes.string
}

export default InputBox

const styles = StyleSheet.create({
  'container-email': {
    borderRadius: 7,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderColor: 'red'

  },
  'container-password': {
    borderRadius: 7,
    marginVertical: 2,
    overflow: 'hidden', // ketika keluar dari ukuran maka otomatis kehidden
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  icon: {
    marginRight: 10,
    marginLeft: 20
  },
  'input-box-email': {
    flex: 1,
    height: 45,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#727c8e',
    includeFontPadding: false,
    paddingRight: 30
  },
  'input-box-password': {
    flex: 1,
    height: 45,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#727c8e',
    includeFontPadding: false,
    paddingRight: 30
  }
})
