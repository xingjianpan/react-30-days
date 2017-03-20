import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.list}>

          <View style={styles.row}  />
          <View style={styles.row}  />
          <View style={styles.row}  />
          <View style={styles.row}  />

          <View style={styles.row}  />
          <View style={styles.row}  />
          <View style={styles.row}  />
          <View style={styles.row}  />
          <View style={styles.row}  />
          <View style={styles.row}  />
      </View>


    );
  }
}


const styles = {
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
};

export default Welcome;

