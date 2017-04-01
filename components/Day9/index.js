import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';

class DayTemplate extends Component {
  render() {
    return (
      <Text>Hello World</Text>
    );
  }
}

class AnimatedButtionPress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textComplete: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>

        </TouchableWithoutFeedback>

        <View>
          <Text>{this.state.textComplete}        </Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({

})
export default AnimatedButtionPress;
