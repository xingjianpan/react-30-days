import React, { Component } from "react";
import { StyleSheet, PropTypes, Text, ScrollView } from "react-native";
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from "react-native-scrollable-tab-view";


class Day1 extends Component {
  render() {
    return (
      <ScrollableTabView
        style={styles.container}
        renderTabBar={() => <ScrollableTabBar />}
        tabBarActiveTextColor='#032250'
        tabBarInactiveTextColor='#B5BD89'
        tabBarUnderlineColor='#FFCCBC'
      >
        <ScrollView tabLabel="Tab #1">
          <Text style={styles.errorTextStyle}>
          </Text>
        </ScrollView>
        <Text tabLabel="Tab #2">
          Tab 2
        </Text>
        <Text tabLabel="Tab #3">Tab 3</Text>


      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 1,
    paddingHorizontal: 5,
    flex: 1,
    marginTop: 64,
  },
  button: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  errorTextStyle: {
    fontSize: 15,
    alignSelf: "center",
    color: "black",
  },
});

export default Day1;
