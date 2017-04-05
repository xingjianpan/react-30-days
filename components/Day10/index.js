import React, { Component } from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';
import Input from './Input'

class DayTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: 15,
      exp: null,
    };
  }

  renderTipText() {
    return `Tip(${this.state.tip}%):`;
  }

  renderTip() {
    if (this.state.exp !== null) {
      const value = parseFloat(this.state.exp) * parseFloat(this.state.tip) / 100;
      return `$${value}`;
    }
    return 0;
  }

  renderTotal() {
    if (this.state.exp !== null) {
      const value = parseFloat(this.state.exp) + parseFloat(this.state.exp) * parseFloat(this.state.tip) / 100;
      return `$${value}`;
    }
    return 0;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.display} >
          <Input
            placeholder={'$0.0'}
            onChangeText={exp => this.setState({exp})}
          />
        </View>
        <View style={styles.calculator}>
          <View style={styles.tip}>
            <Text style={styles.textLabel}>{this.renderTipText()}</Text>
            <Text style={styles.textValue}>{this.renderTip()}</Text>
          </View>
          <View style={styles.total}>
            <Text style={styles.textLabel}>Total:</Text>
            <Text style={styles.textValue}>{this.renderTotal()}</Text>
          </View>
        </View>
        <View style={styles.slider}>
          <Slider
            maximumValue={100}
            value={this.state.tip}
            step={1}
            onValueChange={(tip) => this.setState({tip})}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 64,
  },
  display: {
    // borderWidth: 1,
    height: 150,

  },
  calculator: {
    // height: 150,
    flexDirection: 'column',
    padding: 10,

  },
  tip: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  textLabel: {
    fontSize: 25,
    paddingRight: 5,
  },
  textValue: {
    fontSize: 25,
  },
  slider: {
    padding: 20,
  }
});

export default DayTemplate;
