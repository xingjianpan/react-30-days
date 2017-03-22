import React, { Component } from 'react';
import { View } from 'react-native';
import Button from 'react-native-button';

class ClockButton extends Component {
  _handlePress() {
    console.log('Pressed!');
  }
  render() {
    return (

        <Button
          containerStyle={[styles.buttonContainer, this.props.style]}
          style={styles.button}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          {this.props.children}
        </Button>

    );
  }
}

const styles = {

  buttonContainer: {
    padding: 10,
    height: 80,
    width: 80,
    overflow: 'hidden',
    borderRadius: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
    color: 'white',

  },
};

export default ClockButton;
