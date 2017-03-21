import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, View, Text } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from "react-native-scrollable-tab-view";
import Icon from 'react-native-vector-icons/Ionicons';
import FacebookTabBar from './FacebookTabBar';
import { Card, CardSection } from '../common';

const SampleCard = () => {
  return (
    <Card>
      <CardSection>
        <Image style={styles.img} source={require('../../assets/images/yt1_s.png')} />
      </CardSection>
      <CardSection>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </CardSection>
    </Card>
  );
};


const HomePage = () => {
  return (
    <View>
      <SampleCard />
      <SampleCard />
      <SampleCard />
    </View>
  );
};

const PopularPage = () => {
  return (
    <View>
      <SampleCard />
      <SampleCard />
      <SampleCard />
    </View>
  );
};

const SubscribePage = () => {
  return (
    <View>
      <SampleCard />
      <SampleCard />
      <SampleCard />
    </View>
  );
};

const LibraryPage = () => {
  return (
    <View>
      <SampleCard />
      <SampleCard />
      <SampleCard />
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
    flex:1
  },
});

export default Day1;
