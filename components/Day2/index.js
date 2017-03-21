import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import Input from './Input';
import { Actions } from 'react-native-router-flux';

class Day2 extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.context.drawer.open}>
          <Input placeholder="搜索Google地图">Open Drawer</Input>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

Day2.contextTypes = {
  drawer: React.PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7699dd',
    padding: 20,
    flex: 1,
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#CCC',
    marginTop: 50,
  },

});

export default Day2;
