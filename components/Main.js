import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import ListItem from './ListItem';

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { key: 1,
          title: 'Day1',
          isFA: false,
          icon: 'ios-stopwatch',
          size: 48,
          color: '#ff856c',
          hideNav: false,
          route: 'day1',
        },
        { key: 2, title: 'Day2', route: 'day2' },
      ],
    };
  }

  componentWillMount() {
    this.createDataSource(this.state.data);
  }

  createDataSource(data) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(data);
  }


  renderRow(item) {
    return (
      <ListItem item={item} />
    );
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}


const styles = {
  list: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 64,
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 1,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC',
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold',
  },
};

export default Welcome;

