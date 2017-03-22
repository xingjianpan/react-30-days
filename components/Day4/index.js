import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Button from './Button';
import { Card, CardSection } from '../common';

class Day4 extends Component {
  constructor(props, context) {
    super(props, context);
  }
  _handlePress() {
    console.log('Pressed!');
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.displayContainer}>
          <View style={styles.clockContainer}>
            <Text style={styles.mainClock}>00:00:00</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button>reset</Button>
            <Button>start</Button>
          </View>

        </View>
        <View style={styles.resultConainer}>

        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    clock: state.day4,
  };
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 64,
  },
  displayContainer: {
    flex: 1.5,
    flexDirection: 'column',
    backgroundColor: 'transparent',

  },
  clockContainer: {
    borderWidth: 1,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainClock: {
    fontSize: 70,
    borderWidth: 1,

  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,

  },
  resultConainer: {
    flex: 1,
    backgroundColor: 'gray',
  },
  button: {
    fontSize: 20,
    color: 'white',
  },
};

export default connect(mapStateToProps, null)(Day4);
