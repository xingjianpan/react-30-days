import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../../utils';

const HourlyItem = ({ item }) => {
  return (
    <View style={styles.hourlyItemContainer}>
      <Text style={styles.hourlyItemText} >{item.time}</Text>
      <Icon
        name={item.icon}
        size={25}
        style={[styles.hourlyItemIcon, { color: item.color }]}
      />
      <Text style={styles.hourlyItemDegree}>{item.degree}</Text>
    </View>
  );
};

const WeatherHouly = ({ data }) => {
  return (
    <ScrollView horizontal style={styles.hourelyDataContainer}>
      {data.map(item => <HourlyItem item={item} key={item.key} />)}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  hourelyDataContainer: {
    marginTop: 3,
    borderTopColor: 'rgba(255,255,255,0.7)',
    borderTopWidth: Util.pixel,
    borderBottomColor: 'rgba(255,255,255,0.7)',
    borderBottomWidth: Util.pixel,
  },
  hourlyItemContainer: {
    paddingLeft: 7,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  hourlyItemText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  hourlyItemIcon: {
    textAlign: 'center',
    paddingTop: 10,
  },
  hourlyItemDegree: {
    color: '#fff',
    fontSize: 14,
    paddingTop: 10,
    textAlign: 'center',
  },
});

export default WeatherHouly;
