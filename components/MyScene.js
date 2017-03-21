import React, { Component } from "react";
import { StyleSheet, PropTypes, Text, ScrollView } from "react-native";
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from "react-native-scrollable-tab-view";


class MyScene extends Component {
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
            New MiFIDII.com
            We are delighted to inform you that we have re-vamped our www.MiFIDII.com  website in order to:
            - Pivot to solutions and services
            - Host of a new ‘Non EU’ section (we will add to its contents)
            - Elevate its lead generating capabilities (more contact us forms etc)
            - Improved showcasing our social media content
            - Improved its internal search engine meta tagging and framework            - Pivot to solutions and services
            - Host of a new ‘Non EU’ section (we will add to its contents)
            - Elevate its lead generating capabilities (more contact us forms etc)
            - Improved showcasing our social media content
            - Improved its internal search engine meta tagging and framework            - Pivot to solutions and services
            - Host of a new ‘Non EU’ section (we will add to its contents)
            - Elevate its lead generating capabilities (more contact us forms etc)
            - Improved showcasing our social media content
            - Improved its internal search engine meta tagging and framework            - Pivot to solutions and services
            - Host of a new ‘Non EU’ section (we will add to its contents)
            - Elevate its lead generating capabilities (more contact us forms etc)
            - Improved showcasing our social media content
            - Improved its internal search engine meta tagging and framework            - Pivot to solutions and services
            - Host of a new ‘Non EU’ section (we will add to its contents)
            - Elevate its lead generating capabilities (more contact us forms etc)
            - Improved showcasing our social media content
            - Improved its internal search engine meta tagging and framework
            We hope that you will find it to be easier to use, navigate and ENCOURAGE you to share awareness of its existence with your colleagues, contacts and social media networks – aka help us spread the word to find out more visit: www.MiFIDII.com
          </Text>
        </ScrollView>
        <Text tabLabel="Tab #2">
          Text
        </Text>
        <Text tabLabel="Tab #3">project</Text>
        <Text tabLabel="Tab #3">project</Text>
        <Text tabLabel="Tab #3">project</Text>
        <Text tabLabel="Tab #3">project</Text>
        <Text tabLabel="Tab #3">project</Text>
        <Text tabLabel="Tab #3">project</Text>
        <Text tabLabel="Tab #3">project</Text>

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

export default MyScene;
