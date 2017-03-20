import React from 'react';
import { StyleSheet,StatusBar } from 'react-native';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import Welcome from '../components/Welcome';

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.container}>
      <Scene key="test" component={Welcome} />
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
