import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from "react-native-scrollable-tab-view";
import Icon from 'react-native-vector-icons/Ionicons';
import FacebookTabBar from './FacebookTabBar';

class Day1 extends Component {
  render() {
    return (
      <ScrollableTabView
        style={styles.container}
        renderTabBar={() => <FacebookTabBar />}
        tabBarActiveTextColor="#e52d27"
        tabBarInactiveTextColor="#000000"
        tabBarUnderlineColor="white"
        tabBarPosition='bottom'
        tabBarBackgroundColor="#f1f1f1"
      >
        <ScrollView tabLabel="ios-paper" style={styles.tabView}>
          <Icon name="logo-apple" color="black" size={300} style={styles.icon} />
          <Icon name="ios-phone-portrait" color="black" size={300} style={styles.icon} />
          <Icon name="logo-apple" color="#DBDDDE" size={300} style={styles.icon} />
          <Icon name="ios-phone-portrait" color="#DBDDDE" size={300} style={styles.icon} />
        </ScrollView>
        <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
          <Icon name="logo-android" color="#A4C639" size={300} style={styles.icon} />
          <Icon name="logo-android" color="black" size={300} style={styles.icon} />
          <Icon name="logo-android" color="brown" size={300} style={styles.icon} />
        </ScrollView>
        <Text tabLabel="ios-notifications" style={styles.tabView}>Tab 3</Text>
        <Text tabLabel="ios-list" style={styles.tabView}>Tab 4</Text>
      </ScrollableTabView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // paddingVertical: 5,
    // paddingHorizontal: 5,
    flex: 1,
    marginTop: 64,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
});

export default Day1;
