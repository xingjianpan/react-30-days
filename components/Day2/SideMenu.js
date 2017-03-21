import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class SideMenu extends Component {
  render(){
    const drawer = this.context.drawer;
    return (
      <View style={[styles.container, this.props.sceneStyle]}>
        <View style={styles.list}>
          <View style={styles.titleWrapper}>
            <Icon
              name="ios-search"
              size={20}
              color={'#ecf2f9'}
              style={styles.rightArrow}
            />

            <Text>Search</Text>
          </View>
          <View style={styles.arrowWrapper}>
            <Icon
              name="ios-arrow-forward"
              size={20}
              color={'#a6a6a6'}
              style={styles.rightArrow}
            />
          </View>
        </View>
        <View style={styles.seperator} />

      </View>
    );
  }
}

SideMenu.contextTypes = {
  drawer: React.PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 10,
  },
  closeButton: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  list: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#ecf2f9',
    fontSize: 20,
    paddingLeft: 5,
  },
  arrowWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  rightArrow: {
    height: 20,
    width: 20,
  },
  seperator: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#204060',
    height: 0.5,
  },

});


export default SideMenu;
