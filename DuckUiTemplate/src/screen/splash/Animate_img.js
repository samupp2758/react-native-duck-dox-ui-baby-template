import React, {Component} from 'react';
import {Animated} from 'react-native';

export default class Animations_img extends React.Component {
    state = {
      fadeAnim: new Animated.Value(0), 
      // Initial value for opacity: 0
    }
    constructor(props) {
      super(props)
      this.moveAnimation = new Animated.ValueXY({x: 0, y: 100})
    }
  
    componentDidMount() {
      Animated.spring(this.moveAnimation, {
        toValue: {x: 0, y: 0},
      }).start()
      Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 1000,              // Make it take a while
        }
      ).start();   
      }
  
    render() {
      let { fadeAnim } = this.state;
  
      return (
        <Animated.View style={{...this.props.style,...this.moveAnimation.getLayout(), opacity: fadeAnim, }}>
          {this.props.children}
        </Animated.View>
      );
    }
  }