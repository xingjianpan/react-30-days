import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';

class DayTemplate extends Component {
  render() {
    return (
      <Text>Hello World</Text>
    );
  }
}

const ACTION_TIMER = 400;

class AnimatedButtionPress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textComplete: '',
      pressAction: new Animated.Value(0),
    };
  }

  componentWillMount() {
    this.animatedValue = 0;
    this.state.pressAction.addListener((v) => this.animatedValue = v.value);
  }

  handlePressIn() {
    Animated.Timing(this.state.pressAction, {
      duration: ACTION_TIMER,
      toValue: 1,
    }).start(this.animationActionComplete);
  }


  handlePressOut() {
    Animated.Timing(this.state.pressAction, {
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
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <View style={styles.button}>
            <Animated.View
              style={styles.bgFill}
            />
            <Text style={styles.text}>Press and hold me</Text>
          </View>
        </TouchableWithoutFeedback>

        <View>
          <Text>{this.state.textComplete}</Text>
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
    marginTop: 64,
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
    bottom: 0,
  },
});


export default AnimatedButtionPress;
