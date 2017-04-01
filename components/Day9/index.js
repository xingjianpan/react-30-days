import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';

const ACTION_TIMER = 400;
const COLORS = ['rgb(255,255,255)', 'rgb(111,235,62)'];

class AnimatedButtionPress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textComplete: '',
      pressAction: new Animated.Value(0),
      buttonWidth: 100,
      buttonHeight: 20,
    };
  }

  componentWillMount() {
    this.animatedValue = 0;
    this.state.pressAction.addListener((v) => this.animatedValue = v.value);
  }

  handlePressIn() {
    Animated.timing(this.state.pressAction, {
      duration: ACTION_TIMER,
      toValue: 1,
    }).start(this.animationActionComplete.bind(this));
  }


  handlePressOut() {
    Animated.timing(this.state.pressAction, {
      duration: this.animatedValue * ACTION_TIMER,
      toValue: 0,
    }).start();
  }

  animationActionComplete() {
    let message = '';
    if (this.animatedValue === 1) {
      message = 'you held it long enough to fire the action';
    }
    this.setState({
      textComplete: message,
    });
  }

  getButtonWidthLayout(e) {
    this.setState({
      buttonWidth: e.nativeEvent.layout.width - 6,
      buttonHeight: e.nativeEvent.layout.height - 6,
    });
  }

  getProgressStyle() {
    let width = this.state.pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.buttonWidth],
    });

    let bgColor = this.state.pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: COLORS,
    });

    return {
      width,
      height: this.state.buttonHeight,
      backgroundColor: bgColor,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn.bind(this)}
          onPressOut={this.handlePressOut.bind(this)}
        >
          <View
            style={styles.button}
            onLayout={(e) => { console.log(e); }}
          >
            <Animated.View
              style={[styles.bgFill, this.getProgressStyle()]}
            />
            <Text style={styles.text}>Press and hold me</Text>
          </View>
        </TouchableWithoutFeedback>

        <View >
          <Text >{this.state.textComplete}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderWidth: 3,
    borderColor: '#111',
  },
  text: {
    backgroundColor: 'transparent',
    color: '#111',
  },
  bfFill: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});


export default AnimatedButtionPress;
