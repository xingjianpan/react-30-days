import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../../utils';

const WeatherDaily = ({ data }) => {
  return (
    <View style={styles.dailyData}>
      {data.map(item => <DailyItem item={item} key={item.key} />)}
    </View>
  );
};

const DailyItem = ({ item }) => {
  return (
    <View style={styles.dailyItemContainer}>
      <Text style={styles.dailyItemText} >{item.day}</Text>
      <Icon
        name={item.icon}
        size={25}
        style={styles.DailyItemIcon}
      />
      <View style={styles.dailyItemDegree}>
        <Text style={styles.dailyItemDegreeHigh}>{item.high}</Text>
        <Text style={styles.dailyItemDegreeLow}>{item.low}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  dailyData: {
    marginTop: 3,
    borderBottomColor: 'rgba(255,255,255,0.7)',
    borderBottomWidth: Util.pixel,
  },
  dailyItemContainer: {
    flexDirection: 'row',
    width: Util.size.width,
  },
  dailyItemText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    color: '#fff',
  },
  dailyItemDegree: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },

  DailyItemIcon: {
    color: '#fff',
  },
  dailyItemDegreeHigh: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '200',
    width: 30,
  },
  dailyItemDegreeLow: {
    fontSize: 16,
    color: '#eee',
    fontWeight: '200',
    width: 30,
  },
});

export default WeatherDaily;
