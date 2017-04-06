import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Main from '../components/Main';
import Day1 from '../components/Day1';
import Day2 from '../components/Day2';
import NavigationDrawer from '../components/Day2/NavigationDrawer';
import Day3 from '../components/Day3';
import Day4 from '../components/Day4';
import Day5 from '../components/Day5';
import Day6 from '../components/Day6';
import Day7 from '../components/Day7';
import Day8 from '../components/Day8';
import Day9 from '../components/Day9';
import Day10 from '../components/Day10';
import Day11 from '../components/Day11';

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.container}>
      <Scene title="30 days of React" key="welcome" component={Main} />
      <Scene title="Day-1" key="day1" component={Day1} />
      <Scene title="Day-2" key="day2" component={NavigationDrawer} >
        <Scene title="Day-2-main" key="day2-main" component={Day2} />
      </Scene>
      <Scene title="Day-3" key="day3" component={Day3} hideNavBar />
      <Scene title="Day-4" key="day4" component={Day4} />
      <Scene title="Day-5" key="day5" component={Day5} hideNavBar />
      <Scene title="Day-6" key="day6" component={Day6} hideNavBar />
      <Scene title="Day-7" key="day7" component={Day7} />
      <Scene title="Day-8" key="day8" component={Day8} hideNavBar />
      <Scene title="Day-9" key="day9" component={Day9} hideNavBar />
      <Scene title="Day-10" key="day10" component={Day10} hideNavBar />
      <Scene title="Day-11" key="day11" component={Day11} hideNavBar />
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
