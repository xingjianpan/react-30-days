import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.text}>
        <Text>Welcome!</Text>
      </View>
    );
  }
}


const styles = {
  text: {
    marginTop: 64,
    flex: 1,
  },
};

export default Welcome;

