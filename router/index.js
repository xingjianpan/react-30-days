import React from 'react';
import { StyleSheet,StatusBar } from 'react-native';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import Welcome from '../components/Welcome';
import Day1 from '../components/Day1';
import MyScene from '../components/MyScene';

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.container}>
      <Scene title="30 days of React" key="welcome" component={Welcome} />
      <Scene title="Day-1" key="day1" component={Day1} />
      <Scene title="Day-2" key="day2" component={MyScene} />
    </Router>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});


export default RouterComponent;
