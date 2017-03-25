import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Button from './Button';
import { startClock, stopClock, resetClock, logCurrent, Tick, setTimer } from '../../actions/Day4';

class Day4 extends Component {

  constructor(props, context) {
    super(props, context);
  }

  renderTimeFormat(number) {
    var milSecond = Math.floor((number%1000)/10);
    var sec_num = parseInt(number/1000, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds + ':' + milSecond;
  }
  handleStopButton() {
    this.props.stopClock();
    clearInterval(this.props.timerId);
  }

  handlStartButton() {
    this.props.startClock();
    this.props.Tick(); // to execute the setInterval function without delay the first time
    const timerId = setInterval(() => {
      this.props.Tick();
    }, 10);

    this.props.setTimer(timerId);
  }

  renderStartButton() {
    if (this.props.started) {
      return <Button onPress={this.handleStopButton.bind(this)}>stop</Button>;
    }
    return <Button onPress={this.handlStartButton.bind(this)}>start</Button>;
  }

  renderResetButton() {
    if (this.props.started) {
      return <Button onPress={this.props.logCurrent.bind(this)}>log</Button>;
    }
    return <Button onPress={this.props.resetClock.bind(this)}>reset</Button>;
  }

  renderResults() {
    if (this.props.logs.length > 0) {
      return this.props.logs.reverse().map(
        (log, idx) => {
          return (
            <View style={styles.resultRow}>
              <Text style={styles.resultCounter}>计次：{ this.props.counter - idx} </Text>
              <Text style={styles.resultText}>{this.renderTimeFormat(log)}</Text>
            </View>
          );
        },
      );
    }
  }



  renderInitialResult() {
    let displayTime;
    if (this.props.started) {
      displayTime = this.props.accumulatedTime + this.props.now - this.props.startTime;
    } else {
      displayTime = this.props.accumulatedTime;
    }
    return (
      <View style={styles.resultRow}>
        <Text style={styles.resultCounter}>当    次:</Text>
        <Text style={styles.resultText}>{this.renderTimeFormat(displayTime)}</Text>
      </View>
    );
  }

  renderDisplay() {
    const accumulatedTotal = this.props.logs.reduce((a, b) => a + b, 0) +
      this.props.accumulatedTime;
    if (this.props.started) {
      return this.renderTimeFormat(
        accumulatedTotal + this.props.now - this.props.startTime);
    }
    // return this.props.logs.reduce((a, b) => a + b, 0);
    return this.renderTimeFormat(accumulatedTotal);
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
          <ScrollView>
            { this.renderInitialResult()}
            { this.renderResults() }
          </ScrollView>
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
    flexDirection: 'row',
    borderBottomWidth: 1,

  },
  resultConainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    fontSize: 10,
    color: 'white',
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resultText: {
    fontSize: 20,
    color: 'black',
  },
};

function mapStateToProps(state) {
  const { started, startTime, accumulatedTime, logs, counter, timerId, now } = state.day4;
  return {
    started,
    startTime,
    accumulatedTime,
    logs,
    counter,
    timerId,
    now,
  };
}

export default connect(mapStateToProps,
  { startClock, stopClock, resetClock, logCurrent, Tick, setTimer })(Day4);
