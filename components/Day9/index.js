import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { tap, reset } from '../../actions/Day8';

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
      timerId: null,
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
    this.state.timerId = setInterval(() => {
      this.props.tap();
    }, 10);
  }


  handlePressOut() {
    Animated.timing(this.state.pressAction, {
      duration: this.animatedValue * ACTION_TIMER,
      toValue: 0,
    }).start();
    clearInterval(this.state.timerId);
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
        <View style={styles.header}>
          <Text style={styles.headerText}> Counter</Text>
        </View>

        <View style={styles.main}>
          <Text style={styles.numberText}>
            {this.props.counter}
          </Text>
          <View style={styles.buttonGroup}>
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

            <Button
              containerStyle={styles.buttonContainer}
              styleDisabled={{ color: 'red' }}
              onPress={this.props.reset.bind(this)}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </Button>
          </View>
        </View>

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
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: '#000',
  },
  main: {
    flex: 5,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    padding: 10,
    height: 80,
    width: 80,
    overflow: 'hidden',
    borderRadius: 50,
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 150,
    fontWeight: '200',
  },
  buttonText: {
    fontSize: 20,
    color: 'blue',

  },
});


function mapStateToProps(state) {
  const { counter } = state.day8;
  return {
    counter,
  };
}
export default connect(mapStateToProps, { tap, reset })(AnimatedButtionPress);
