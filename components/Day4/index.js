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
    if (this.props.started) {
      return <Button onPress={this.props.stopClock.bind(this)}>stop</Button>;
    }
    return <Button onPress={this.props.startClock.bind(this)}>start</Button>;
  }

  renderResetButton() {
    if (this.props.started) {
      return <Button onPress={this.props.logCurrent.bind(this)}>log</Button>;
    }
    return <Button onPress={this.props.resetClock.bind(this)}>reset</Button>;
  }

  renderResults() {
    if (this.props.logs) {
      return this.props.logs.map(log => <Text style={styles.resultText}>{log}</Text>);
    }
    return '';
  }

  renderDisplay() {
    setInterval(
      () => { },
      100,
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.displayContainer}>
          <View style={styles.clockContainer}>
            <Text style={styles.mainClock}>{this.renderDisplay()}</Text>
          </View>
          <View style={styles.buttonContainer}>
            {this.renderResetButton()}
            {this.renderStartButton()}
          </View>

        </View>

        <View style={styles.resultConainer}>
          {this.renderResults()}
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
  resultText: {
    fontSize: 15,
    color: 'red',
  },
};

function mapStateToProps(state) {
  const { started, logs } = state.day4;
  return {
    started,
    logs,
  };
}

export default connect(mapStateToProps,
  { startClock, stopClock, resetClock, logCurrent })(Day4);
