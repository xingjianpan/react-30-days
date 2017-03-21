import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { key: 1,
          title: 'Day1',
          isFA: false,
          icon: 'ios-stopwatch',
          size: 48,
          color: '#ff856c',
          hideNav: false,
          route: 'day1',
        },
        { key: 2, title: 'Day2', route: 'day2' },
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
  },
};

export default Welcome;

