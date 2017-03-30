import React from 'react';
import { Text, View } from 'react-native';

const WeatherTop = ({ item }) => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.city}>
        <Text style={styles.cityText}>{item.city}</Text>
        <Text style={styles.airQualityText}>{item.abs}</Text>
      </View>
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{item.degree}°</Text>
      </View>
    </View>
  );
};

const styles = {
  topContainer: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  city: {

    alignItems: 'center',
    justifyContent: 'center',
  },
  cityText: {
    fontSize: 30,
    color: 'white',
  },
  airQualityText: {
    fontSize: 15,
    color: 'white',
  },
  temperature: {
    paddingTop: 5,
  },
  temperatureText: {
    fontSize: 80,
    color: 'white',
  },
}
export default WeatherTop;
