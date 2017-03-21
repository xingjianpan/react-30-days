import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from "react-native-scrollable-tab-view";
import Icon from 'react-native-vector-icons/Ionicons';

class Day1 extends Component {
  render() {
    return (
      <ScrollableTabView
        style={styles.container}
        renderTabBar={() => <ScrollableTabBar />}
        tabBarActiveTextColor="#032250"
        tabBarInactiveTextColor="#B5BD89"
        tabBarUnderlineColor="#FFCCBC"
        // tabBarPosition='overlayTop'
      >
        <ScrollView tabLabel="iOS">
          <Icon name="logo-apple" color="black" size={300} style={styles.icon} />
          <Icon name="ios-phone-portrait" color="black" size={300} style={styles.icon} />
          <Icon name="logo-apple" color="#DBDDDE" size={300} style={styles.icon} />
          <Icon name="ios-phone-portrait" color="#DBDDDE" size={300} style={styles.icon} />
        </ScrollView>
        <ScrollView tabLabel="Android">
          <Icon name="logo-android" color="#A4C639" size={300} style={styles.icon} />
          <Icon name="logo-android" color="black" size={300} style={styles.icon} />
          <Icon name="logo-android" color="brown" size={300} style={styles.icon} />
        </ScrollView>
        <Text tabLabel="tab #3">Tab 3</Text>
        <Text tabLabel="tab #4">Tab 4</Text>
        <Text tabLabel="tab #5">Tab 5</Text>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 1,
    paddingHorizontal: 5,
    flex: 1,
    marginTop: 64,
  },
});

export default Day1;
