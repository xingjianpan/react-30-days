import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      data: [
      { key: 1, name: 'Day1', route: 'day1' },
      { key: 2, name: 'Day2', route: 'day2' },
      { key: 3, name: 'Day3', route: 'day3' },
      { key: 4, name: 'Day4', route: 'day4' },
      { key: 5, name: 'Day5', route: 'day5' },
      { key: 6, name: 'Day6', route: 'day6' },
      { key: 7, name: 'Day7', route: 'day7' },
      { key: 8, name: 'Day8', route: 'day8' },
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
      <TouchableHighlight
        key={item.key}
        onPress={()=>{Actions[item.route]()}}
        underlayColor="rgba(0,0,0,0)"
        style={styles.row}
      >
        <View >
          <Text style={styles.text}>
            {item.name}
          </Text>
        </View>
      </TouchableHighlight>
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

