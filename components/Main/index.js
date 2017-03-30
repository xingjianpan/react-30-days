import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';
import Util from '../../utils';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: 1,
          title: 'Day1',
          isFA: false,
          icon: 'ios-home',
          size: 48,
          color: '#e52d27',
          hideNav: false,
          route: 'day1',
        },
        { key: 2,
          title: 'Day2',
          route: 'day2',
          isFA: true,
          icon: 'bars',
          size: 50,
          color: '#ccc',
          hideNav: false,
        },
        { key: 3,
          title: 'Day3',
          route: 'day3',
          isFA: true,
          icon: 'angle-double-down',
          size: 50,
          color: '#FF9A05',
          hideNav: false,
        },
        { key: 4,
          title: 'Day4',
          route: 'day4',
          isFA: false,
          icon: 'ios-stopwatch',
          size: 50,
          color: '#ff856c',
          hideNav: false,
        },
        { key: 5,
          title: 'Day5',
          route: 'day5',
          isFA: false,
          icon: 'ios-partly-sunny',
          size: 60,
          color: '#90bdc1',
          hideNav: false,
        },
        { key: 6,
          title: 'Day6',
          route: 'day6',
          isFA: false,
          icon: 'logo-twitter',
          size: 50,
          color: '#2aa2ef',
          hideNav: true,
        },
      ],
    };
  }

  componentWillMount() {
    this.createDataSource(this.state.data);
  }

  createDataSource(data) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(data);
  }


  renderRow(item) {
    return (
      <ListItem item={item} />
    );
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}


const styles = {
  list: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 64,
    width: Util.size.width,
  },
};

export default Welcome;

