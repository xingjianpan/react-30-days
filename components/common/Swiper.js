import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
  },

});

const MySwiper = (props) => {
  return (
    <Swiper style={styles.wrapper}>
      {props.children}
    </Swiper>
  );
};


export { MySwiper };
