import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../../utils';

class ListItem extends Component {
  render() {
    const { key, title, route, isFA, icon, size, color, hideNav } = this.props.item;
    return (
      <TouchableHighlight
        key={key}
        onPress={() => { Actions[route](); }}
        underlayColor="#eee"
        style={styles.row}
      >
        <View >
          <Text style={styles.text}>
            {title}
          </Text>
          { isFA ? <IconFA size={size} name={icon} style={[styles.boxIcon, { color }]} />
            : <Icon size={size} name={icon} style={[styles.boxIcon, { color }]} /> }
        </View>
      </TouchableHighlight>
    );
  }
}


const styles = {
  row: {
    justifyContent: 'center',
    // padding: 5,

    width: Util.size.width / 3 - 0.33334,
    height: Util.size.width / 3,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    // borderRadius: 5,
    borderWidth: Util.pixel,
    borderColor: '#ccc',
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold',
  },
  boxIcon: {
    position: 'relative',
    top: -10,
  },
};

export default ListItem;
