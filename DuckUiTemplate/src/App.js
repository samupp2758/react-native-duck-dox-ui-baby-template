import React from 'react';
import {StatusBar,Animated, Easing} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation'; 
import SplashScreen from './screen/splash/';
import HomeScreen from './screen/main/';


const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 1050,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { position, scene } = sceneProps
      const thisSceneIndex = scene.index
      const opacity = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [0, 1],
      })

      return { opacity } 
    },
  }}
const AppSNavigator = createStackNavigator({
  Splash: {screen: SplashScreen},
  Home:{screen: HomeScreen},
  
},{
  transitionConfig,
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:"#fff"
    }
  }
})

const Navis = createAppContainer(AppSNavigator)


const App = () => (
  <>
    <StatusBar
      backgroundColor="transparent"
      translucent
      barStyle="light-content"
    />
    <Navis />
  </>
);

export default App;