import React from 'react';
import { Provider } from 'react-redux';
import Router from './router';
import configureStore from './stores/configureStore';

console.disableYellowBox = true;

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

