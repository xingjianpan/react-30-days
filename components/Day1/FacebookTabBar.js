// Adapted from https://github.com/skv-headless/react-native-scrollable-tab-view/blob/master/examples/FacebookTabsExample/FacebookTabBar.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class FacebookTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIcons: [],
      titles:['首页', '时下流行', '订阅内容', '媒体库']
    };
  }


  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue.bind(this));
  }

  setAnimationValue({ value }) {
    this.state.tabIcons.forEach((icon, i) => {
      const progress = Math.min(1, Math.abs(value - i));
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
    });
  }

  // color between rgb(229,45,39) and rgb(204,204,204)
  iconColor(progress) {
    const red = 229 + (204 - 229) * progress;
    const green = 45 + (204 - 45) * progress;
    const blue = 39 + (204 - 39) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity
              key={tab}
              onPress={() => this.props.goToPage(i)}
              style={styles.tab}
            >
              <Icon
                name={tab}
                size={30}
                color={this.props.activeTab === i ? 'rgb(229,45,39)' : 'rgb(204,204,204)'}
                ref={(icon) => { this.state.tabIcons[i] = icon; }}
              />
              <Text
                style={styles.title}
              >
                {this.state.titles[i]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}


FacebookTabBar.propTypes = {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.arrayOf(React.PropTypes.string),
};

FacebookTabBar.defaultProps = {
  goToPage: () => {},
  activeTab: null,
  tabs: [],
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  tabs: {
    height: 55,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  title: {
    fontSize: 10,
    paddingBottom: 10,
  },
});

export default FacebookTabBar;
