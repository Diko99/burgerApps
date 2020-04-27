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
  FlatList,
  TouchableOpacity
} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CheckBox from 'react-native-check-box'

import InputBox from '../../components/inputBox'

class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false
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
        {this.renderFooter()}
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
              Welcome Back!
        </Text>
        <Text style={styles['onboarding__lead--p']}>
              Login to continue Burger City
        </Text>
      </View>
    )
  }

  renderForm = () => {
    return (
      <View style={styles['onboarding__formInput']}>
        {this.renderInputBox()}
        {this.renderOption()}
        {this.renderSubmitButton()}
        {this.renderSignUp()}
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
          size: 22,
          style: styles['onboarding__input__icon']
        },
        containerStyle: {}
      },
      {
        placeholder: 'Password',
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
        containerStyle: { marginTop: 17 }
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

  renderOption = () => {
    return (
      <View style={styles['onboarding__option']}>
        {this.renderOptRememberMe()}
        {this.renderOptForgotPassword()}
      </View>
    )
  }

  renderOptRememberMe = () => {
    const { isChecked } = this.state
    return (
      <CheckBox
        style={{ flex: 1 }}
        isChecked={isChecked}
        rightText='Remember Me'
        rightTextStyle={styles['onboarding__option__text']}
        checkBoxColor='#ffffff'
        unCheckedImage={
          <MaterialIcons
            name='radio-button-unchecked'
            color='#ffffff'
            size={20}
          />
        }
        checkedImage={
          <MaterialIcons
            name='check-circle'
            color='#ffffff'
            size={20}
          />
        }
        onClick={this.onRemember}
      />
    )
  }

  onRemember = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }))
  }

  renderOptForgotPassword = () => {
    return (
      <TouchableOpacity
        onPress={this.onForgotPassword}
      >
        <Text style={styles['onboarding__option__text']}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    )
  }

  onForgotPassword = () => {
    this.props.navigation.navigate('ForgotPasswordScreen')
  }

  renderSubmitButton = () => {
    return (
      <TouchableHighlight
        style={styles['onboarding__button']}
        activeOpacity={0.6}
        underlayColor="#ed941a"
        onPress={() => {}}>
        <Text style={styles['onboarding__button__text']}> Log In </Text>
      </TouchableHighlight>
    )
  }

  renderSignUp = () => {
    return (
      <TouchableOpacity
        style={styles['onboarding__sign-up']}
        onPress={this.onSignUpScreen}
      >
        <Text style={styles['onboarding__sign-up__text']}>
          New user? Sign up
        </Text>
      </TouchableOpacity>
    )
  }

  onSignUpScreen = () => {
    this.props.navigation.navigate('SignUpScreen')
  }

  renderFooter = () => {
    return (
      <View style={styles['onboarding__footer']}>
        <Text style={styles['onboarding__footer__text']}>
          By signing up you indicate that you have read agreed to the Patch&nbsp;
          <Text style={styles['onboarding__footer__text--underline']}>
            Terms Of Service
          </Text>
        </Text>
      </View>
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
    includeFontPadding: false,
    color: '#ffffff',
    marginTop: 3
  },
  onboarding__formInput: {
    paddingHorizontal: 25,
    marginTop: 10
  },
  onboarding__button: {
    backgroundColor: '#ff9f1c',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 25,
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
  },
  onboarding__option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15
  },
  onboarding__option__text: {
    fontSize: 12,
    marginLeft: 5,
    color: '#ffffff',
    includeFontPadding: false
  },
  'onboarding__sign-up': {
    marginTop: 20,
    alignItems: 'center'
  },
  'onboarding__sign-up__text': {
    fontSize: 14,
    marginLeft: 5,
    color: '#ff9f1c',
    fontFamily: 'Nunito-SemiBold',
    includeFontPadding: false
  },
  onboarding__footer: {
    marginTop: 40,
    alignItems: 'center'
  },
  onboarding__footer__text: {
    color: '#ffffff',
    width: 250,
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    textAlign: 'center',
    includeFontPadding: false
  },
  'onboarding__footer__text--underline': {
    textDecorationLine: 'underline'
  }

})

export default LoginScreen
