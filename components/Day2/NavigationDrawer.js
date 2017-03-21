import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { DefaultRenderer } from 'react-native-router-flux';
import SideMenu from './SideMenu';

export default class extends Component {
  render() {
    const children = this.props.navigationState.children;
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="displace"
        content={<SideMenu />}
        tapToClose
        openDrawerOffset={0.2}
        styles={drawerStyles}
        panCloseMask={0.2}
        negotiatePan
        tweenHandler={ratio => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
        })}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}


const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15 },
}
