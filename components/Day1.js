import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, View, Text } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from "react-native-scrollable-tab-view";
import Icon from 'react-native-vector-icons/Ionicons';
import FacebookTabBar from './FacebookTabBar';
import { Card, CardSection } from './common'

const HomePage = () => {
  return (
    <View>
      <Card>
        <CardSection>
          <Image style={styles.img} source={{uri:"yt1"}}/>
        </CardSection>

        <CardSection>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </CardSection>
      </Card>

    </View>
  );
};

const PopularPage = () => {
  return (
    <View>
      <Icon name="logo-apple" color="black" size={300} style={styles.icon} />
      <Icon name="ios-phone-portrait" color="black" size={300} style={styles.icon} />
      <Icon name="logo-apple" color="#DBDDDE" size={300} style={styles.icon} />
      <Icon name="ios-phone-portrait" color="#DBDDDE" size={300} style={styles.icon} />
    </View>
  );
};

const SubscribePage = () => {
  return (
    <View>
      <Icon name="logo-apple" color="black" size={300} style={styles.icon} />
      <Icon name="ios-phone-portrait" color="black" size={300} style={styles.icon} />
      <Icon name="logo-apple" color="#DBDDDE" size={300} style={styles.icon} />
      <Icon name="ios-phone-portrait" color="#DBDDDE" size={300} style={styles.icon} />
    </View>
  );
};

const LibraryPage = () => {
  return (
    <View>
      <Icon name="logo-apple" color="black" size={300} style={styles.icon} />
      <Icon name="ios-phone-portrait" color="black" size={300} style={styles.icon} />
      <Icon name="logo-apple" color="#DBDDDE" size={300} style={styles.icon} />
      <Icon name="ios-phone-portrait" color="#DBDDDE" size={300} style={styles.icon} />
    </View>
  );
};


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
        <ScrollView tabLabel="ios-home" style={styles.tabView}>
          <HomePage />
        </ScrollView>
        <ScrollView tabLabel="ios-flame" style={styles.tabView}>
          <PopularPage />
        </ScrollView>
        <ScrollView tabLabel="ios-albums-outline" style={styles.tabView}>
          <SubscribePage />
        </ScrollView>
        <ScrollView tabLabel="md-folder" style={styles.tabView}>
          <LibraryPage />
        </ScrollView>
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
  img: {
    width: 375,
    height: 550,
  },
});

export default Day1;
