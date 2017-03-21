import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ListView } from 'react-native';

class Welcome extends Component {
  componentWillMount() {
    const data = [
      { name: 'tom' },
      { name: 'tom2' },
      { name: 'tom3' },
      { name: 'tom4' },
      { name: 'tom5' },
      { name: 'tom6' },
      { name: 'tom21' },
      { name: 'tom31' },
      { name: 'tom41' },
      { name: 'tom51' },
    ];

    this.createDataSource(data);
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
        onPress={() => {console.log('pressed')}}
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

