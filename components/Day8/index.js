import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { tap, reset } from '../../actions/Day8';

//http://browniefed.com/blog/react-native-press-and-hold-button-actions/
class Day8 extends Component {
  onResetButtonPress () {
    this.props.reset();
  }
  onTapButtonPress() {
    this.props.tap();
  }
  onHoldButtonPress() {
    console.log('holding..')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Counter</Text>
        </View>
        <View style={styles.main}>

          <Text style={styles.numberText}>{this.props.counter}</Text>
          <View style={styles.buttonGroup}>
            <Button
              containerStyle={styles.buttonContainer}
              styleDisabled={{ color: 'red' }}
              onPress={this.onTapButtonPress.bind(this)}
            >
              <Text style={styles.buttonText}>Tap</Text>
            </Button>

            <Button
              containerStyle={styles.buttonContainer}
              styleDisabled={{ color: 'red' }}
              onPress={this.onResetButtonPress.bind(this)}
            >
              <Text style={styles.buttonText}>Rest</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
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
    fontSize: 25,
    color: 'blue',

  },
});

function mapStateToProps(state) {
  const { counter } = state.day8;
  return {
    counter,
  };
}
export default connect(mapStateToProps, { tap, reset })(Day8);
