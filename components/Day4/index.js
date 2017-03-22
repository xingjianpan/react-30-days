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
          <View style={styles.buttonContainer}>
            <Button style={{ backgroundColor: '#CCC' }} >Reset</Button>
            <Button style={{ backgroundColor: 'green' }}>Start</Button>
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
    backgroundColor: 'black',
    marginTop: 64,
  },
  displayContainer: {
    flex: 1.5,
    flexDirection: 'row',
    backgroundColor: 'transparent',

  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,

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
