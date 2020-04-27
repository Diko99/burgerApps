import React, { Component } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  Dimensions,
  YellowBox,
  TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types'

class OnBoardingScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hero: [
        "World's\nGratest\nBurger.",
        "World's\nGratest\nBurger 2.",
        "World's\nGratest\nBurger 3."
      ],
      activeSlide: 0
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
  };

  renderBackground = () => {
    return (
      <ImageBackground
        source={require('../../assets/images/background-image.png')}
        style={styles['onboarding__bg']}>
        {this.renderOverlay()}
        {this.renderLogo()}
        {this.renderHero()}
        {this.renderStartButton()}
      </ImageBackground>
    )
  };

  renderOverlay = () => {
    return <View style={styles['onboarding__overlay']} />
  };

  renderLogo = () => {
    return (
      <View style={styles['onboarding__logo']}>
        <Image source={require('../../assets/icons/burger-city-logo.png')} />
      </View>
    )
  };

  renderHero = () => {
    return (
      <View style={styles['onboarding__hero__container']}>
        {this.renderCarousel()}
        {this.renderCarouselPagination()}
      </View>
    )
  };

  renderCarousel = () => {
    const { width } = Dimensions.get('window')
    return (
      <Carousel
        data={this.state.hero}
        renderItem={this.renderCarouselItem}
        sliderWidth={width}
        itemWidth={width}
        decelerationRate="fast"
        onSnapToItem={index => this.setState({ activeSlide: index })}
      />
    )
  };

  renderCarouselItem = ({ item }) => {
    return (
      <View style={styles['onboarding__hero__wrapper']}>
        <Text style={styles['onboarding__hero']}>{item}</Text>
      </View>
    )
  };

  renderCarouselPagination () {
    const { hero, activeSlide } = this.state
    return (
      <Pagination
        dotsLength={hero.length}
        activeDotIndex={activeSlide}
        dotStyle={styles['onboarding__pagination__dot']}
        dotContainerStyle={styles['onboarding__pagination__dot__container']}
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
        containerStyle={styles['onboarding__pagination__container']}
      />
    )
  }

  renderStartButton = () => {
    return (
      <TouchableHighlight
        style={styles['onboarding__button']}
        activeOpacity={0.6}
        underlayColor="#ed941a"
        onPress={this.onStartHere}
      >
        <Text
          style={styles['onboarding__button__text']}
        >
          Get Start Here
        </Text>
      </TouchableHighlight>
    )
  };

  onStartHere = () => {
    return (
      this.props.navigation.navigate('LoginScreen')
    )
  }
}

OnBoardingScreen.propTypes = {
  navigation: PropTypes.object
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
  onboarding__hero__container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 90
  },
  onboarding__hero__wrapper: {
    paddingHorizontal: 30,
    marginTop: 'auto'
  },
  onboarding__hero: {
    fontSize: 31,
    color: '#ffffff',
    fontFamily: 'Nunito-Bold'
  },
  onboarding__pagination__dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  onboarding__pagination__dot__container: {
    marginHorizontal: 2
  },
  onboarding__pagination__container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  onboarding__button: {
    backgroundColor: '#ff9f1c',
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 30,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 30
  },
  onboarding__button__text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    includeFontPadding: false
  }
})

export default OnBoardingScreen
