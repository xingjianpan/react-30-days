import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Button from './Button';
import { startClock, stopClock, resetClock, logCurrent } from '../../actions/Day4';

class Day4 extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleResetButton() {

  }


  renderStartButton() {
    if(this.props.started){
      return <Button onPress={this.props.stopClock.bind(this)}>stop</Button>
    }
    return <Button onPress={this.props.startClock.bind(this)}>start</Button>
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.displayContainer}>
          <View style={styles.clockContainer}>
            <Text style={styles.mainClock}>00:00:00</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={this.handleResetButton.bind(this)}>reset</Button>
            {this.renderStartButton()}
          </View>

        </View>
        <View style={styles.resultConainer}>

        </View>
      </View>
    );
  }
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
    fontSize: 80,
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
    fontSize: 10,
    color: 'white',
  },
};

function mapStateToProps(state) {
  const { started } = state.day4;
  return {
    started
  };
}

export default connect(mapStateToProps,
  { startClock, stopClock, resetClock, logCurrent })(Day4);
