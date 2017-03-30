import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Util from '../../utils';

const WeatherInfo = ({ item }) => {
  return (
    <View>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>{item.info}</Text>
      </View>

      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.detailRowText}>日出:</Text>
          <Text style={styles.detailRowValue}>{item.rise}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailRowText}>日落:</Text>
          <Text style={styles.detailRowValue}>{item.down}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailRowText}>降雨概率:</Text>
          <Text style={styles.detailRowValue}>{item.prop}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailRowText}>湿度:</Text>
          <Text style={styles.detailRowValue}>{item.humi}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailRowText}>风速:</Text>
          <Text style={styles.detailRowValue}>{item.speed}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailRowText}>体感温度:</Text>
          <Text style={styles.detailRowValue}>{item.feel}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailRowText}>降水量:</Text>
          <Text style={styles.detailRowValue}>{item.rain}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailRowText}>气压:</Text>
          <Text style={styles.detailRowValue}>{item.pres}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailRowText}>能见度:</Text>
          <Text style={styles.detailRowValue}>{item.sight}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailRowText}>紫外线指数:</Text>
          <Text style={styles.detailRowValue}>{item.uv}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  summary: {
    marginTop: 3,
    borderBottomColor: 'rgba(255,255,255,0.7)',
    borderBottomWidth: Util.pixel,
  },
  summaryText: {
    color: '#fff',
    fontSize: 16,
    padding: 5,
  },
  details: {
    paddingTop: 10,
  },

  detailRow: {
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 5,
  },
  detailRowText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    textAlign: 'right',
    paddingRight: 10,
  },
  detailRowValue: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
  },
});

export default WeatherInfo;
