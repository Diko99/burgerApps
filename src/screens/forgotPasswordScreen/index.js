import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  YellowBox,
  TouchableHighlight,
  FlatList
} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import InputBox from '../../components/inputBox'

class ForgotPassword extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  }

  render () {
    return (
      <View>
        {this.renderStatusBar()}
        {this.renderBackground()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    )
  }

  renderBackground = () => {
    return (
      <ImageBackground
        source={require('../../assets/images/background-image.png')}
        style={styles['onboarding__bg']}>
        {this.renderOverlay()}
        {this.renderLogo()}
        {this.renderLead()}
        {this.renderForm()}
      </ImageBackground>
    )
  }

  renderOverlay = () => {
    return <View style={styles['onboarding__overlay']} />
  }

  renderLogo = () => {
    return (
      <View style={styles['onboarding__logo']}>
        <Image source={require('../../assets/icons/burger-city-logo.png')} />
      </View>
    )
  }

  renderLead = () => {
    return (
      <View style={styles['onboarding__lead']}>
        <Text style={styles['onboarding__lead--h1']}>
          Forgot password
        </Text>
        <Text style={styles['onboarding__lead--p']}>
          Please enter a new password and confirm the password
        </Text>
      </View>
    )
  }

  renderForm = () => {
    return (
      <View style={styles['onboarding__formInput']}>
        {this.renderInputBox()}
        {this.renderSubmitButton()}
      </View>
    )
  }

  renderInputBox = () => {
    const inputBoxArr = [
      {
        placeholder: 'Email Address',
        icon: {
          type: EvilIcons,
          name: 'envelope',
          color: '727c8e',
          size: 25,
          style: [
            styles['onboarding__input__icon'],
            { marginLeft: 17 }
          ]
        },
        containerStyle: { }
      },
      {
        placeholder: 'New password',
        icon: {
          type: EvilIcons,
          name: 'lock',
          color: '727c8e',
          size: 22,
          style: styles['onboarding__input__icon']
        },
        containerStyle: { marginTop: 15 }
      },
      {
        placeholder: 'Confirm password',
        icon: {
          type: EvilIcons,
          name: 'lock',
          color: '727c8e',
          size: 25,
          style: [
            styles['onboarding__input__icon'],
            { marginLeft: 17 }
          ]
        },
        containerStyle: { marginTop: 15 }
      }
    ]
    return (
      <FlatList
        data={inputBoxArr}
        keyExtractor={(item, index) => item + index.toString() }
        renderItem={({ item, index }) => <InputBox password={ index === 1} {...item} />}
      />
    )
  }

  renderSubmitButton = () => {
    return (
      <TouchableHighlight
        style={styles['onboarding__button']}
        activeOpacity={0.6}
        underlayColor="#ed941a"
        onPress={() => {}}>
        <Text style={styles['onboarding__button__text']}> Submit </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  onboarding__bg: {
    height: '100%',
    width: '100%'
  },
  onboarding__overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  onboarding__logo: {
    marginTop: 80,
    alignItems: 'center'
  },
  onboarding__lead: {
    marginTop: 20,
    alignItems: 'center'
  },
  'onboarding__lead--h1': {
    fontFamily: 'Nunito-Bold',
    fontSize: 25,
    includeFontPadding: false,
    color: '#ffffff'
  },
  'onboarding__lead--p': {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    width: 250,
    textAlign: 'center',
    includeFontPadding: false,
    color: '#ffffff',
    marginTop: 3
  },
  onboarding__formInput: {
    paddingHorizontal: 25,
    marginTop: 30
  },
  onboarding__button: {
    backgroundColor: '#ff9f1c',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 45,
    includeFontPadding: false
  },
  onboarding__button__text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Nunito-Black',
    includeFontPadding: false
  },
  onboarding__input__icon: {
    marginRight: 10,
    marginLeft: 20
  }
})

export default ForgotPassword
