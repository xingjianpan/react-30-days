import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  render() {
    const { key, title, route } = this.props.item;
    return (
      <TouchableHighlight
        key={key}
        onPress={() => { Actions[route]() }}
        underlayColor="rgba(0,0,0,0)"
        style={styles.row}
      >
        <View >
          <Text style={styles.text}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}


const styles = {
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

export default ListItem;
