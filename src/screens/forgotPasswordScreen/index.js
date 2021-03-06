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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import InputBox from '../../components/inputBox'

class ForgotPassword extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        email: '',
        newPassword: '',
        confirmPassword: '',
        phone: '',
        otp: ''
      },
      identifier: 'create-new-password'
    }
    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  }

  onHandleInput = (key, value) => {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [key]: value
      }
    }))
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
    const { identifier } = this.state
    const sublead = identifier === 'create-new-password'
      ? 'Please enter a new password and confirm the password'
      : identifier === 'insert-otp'
        ? 'For your security, a one time password has been sent to you email address. Please enter it below continue.'
        : 'Custom Subtitle'
    return (
      <View style={styles['onboarding__lead']}>
        <Text style={styles['onboarding__lead--h1']}>
          Forgot password
        </Text>
        <Text style={styles['onboarding__lead--p']}>
          {sublead}
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
    const { identifier } = this.state
    const formInputNewPassword = [
      {
        name: 'email',
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
        name: 'newPassword',
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
        name: 'confirmPassword',
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
    const formInputOTP = [
      {
        name: 'otp',
        placeholder: 'OTP',
        icon: {
          type: FontAwesome5,
          name: 'clipboard-check',
          color: '727c8e',
          size: 20,
          style: [
            styles['onboarding__input__icon'],
            { marginLeft: 17 }
          ]
        }
      }
    ]
    const inputBox = identifier === 'create-new-password'
      ? formInputNewPassword
      : identifier === 'insert-otp'
        ? formInputOTP
        : []
    return (
      <FlatList
        data={inputBox}
        keyExtractor={(item, index) => item + index.toString() }
        renderItem={({ item, index }) => (
          <InputBox
            password={ index > 0 }
            onHandleInput={this.onHandleInput}
            {...item}
          />
        )}
      />
    )
  }

  renderSubmitButton = () => {
    const { data, identifier } = this.state
    const disabled = !data.email || !data.newPassword || !data.confirmPassword
    const buttonStyle = disabled
      ? [
        styles['onboarding__button'],
        styles['onboarding__button--inactive']
      ]
      : [
        styles['onboarding__button'],
        styles['onboarding__button--active']
      ]
    const titleStyle = disabled
      ? [
        styles['onboarding__button__text'],
        styles['onboarding__button__text--inactive']
      ]
      : [
        styles['onboarding__button__text'],
        styles['onboarding__button__text--active']
      ]
    const titleButton = identifier === 'create-new-password'
      ? 'Submit'
      : identifier === 'insert-otp'
        ? 'Procced'
        : 'custom style'

    return (
      <TouchableHighlight
        style={buttonStyle}
        activeOpacity={0.6}
        underlayColor="#ed941a"
        disabled={disabled}
        onPress={() => this.onSubmit()}>
        <Text
          style={titleStyle}
        >
          {titleButton}
        </Text>
      </TouchableHighlight>
    )
  }

  onSubmit = () => {
    const { identifier } = this.state
    if (identifier === 'create-new-password') {
      this.setState({ identifier: 'insert-otp' })
    }
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
    marginTop: 10
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
  'onboarding__button--inactive': {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ff9f1c'
  },
  'onboarding__button--active': {
    backgroundColor: '#ff9f1c'
  },
  onboarding__button__text: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Nunito-Black',
    includeFontPadding: false
  },
  'onboarding__button__text--inactive': {
    color: '#ff9f1c'
  },
  'onboarding__button__text--active': {
    color: '#ffffff'
  },
  onboarding__input__icon: {
    marginRight: 10,
    marginLeft: 20
  }
})

export default ForgotPassword
