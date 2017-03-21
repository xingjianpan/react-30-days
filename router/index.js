import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Main from '../components/Main';
import Day1 from '../components/Day1';
import Day2 from '../components/Day2';

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.container}>
      <Scene title="30 days of React" key="welcome" component={Main} />
      <Scene title="Day-1" key="day1" component={Day1} />
      <Scene title="Day-2" key="day2" component={Day2} />
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
