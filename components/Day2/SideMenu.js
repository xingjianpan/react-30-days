import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, ScrollView } from 'react-native';
import IconIO from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';

class SideMenu extends Component {
  render() {
    const drawer = this.context.drawer;
    return (
      <View style={[styles.container, this.props.sceneStyle]}>
        <View style={styles.list}>

          <View style={styles.arrowWrapper}>
            <IconIO
              name="ios-arrow-down"
              size={20}
              color={'#a6a6a6'}
              style={styles.rightArrow}
            />
          </View>
        </View>

        <ScrollView style={styles.sideMenuContainer}>

          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <IconFA style={styles.btnIcon} name="map-marker" size={15}></IconFA>
              <Text style={styles.btnText} >你的地点</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <IconFA style={styles.btnIcon} name="pencil-square" size={15} />
              <Text style={styles.btnText}>你的贡献</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <IconFA style={styles.btnIcon} name="product-hunt" size={15} />
              <Text style={styles.btnText}>离线区域</Text>
            </View>
          </TouchableHighlight>

          <View style={styles.seperator} />

          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <IconFA style={styles.btnIcon} name="road" size={15} />
              <Text style={styles.btnText}>实时路况</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <IconFA style={styles.btnIcon} name="bus" size={15} />
              <Text style={styles.btnText}>公交线路</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <IconFA style={styles.btnIcon} name="bicycle" size={15} />
              <Text style={styles.btnText}>骑车线路</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <IconFA style={styles.btnIcon} name="photo" size={15} />
              <Text style={styles.btnText}>卫星图像</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#888" onPress={()=>{true}}>
            <View style={styles.btn}>
              <IconFA style={styles.btnIcon} name="tree" size={15} />
              <Text style={styles.btnText}>地形</Text>
            </View>
          </TouchableHighlight>

        </ScrollView>
      </View>
    );
  }
}

SideMenu.contextTypes = {
  drawer: React.PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    // padding: 10,
  },
  closeButton: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  list: {
    // paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 160,
    backgroundColor: '#303030',
    paddingBottom: 15,
    paddingRight: 15,
  },
  titleWrapper: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#ecf2f9',
    fontSize: 20,
    paddingLeft: 5,
  },
  arrowWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  rightArrow: {
    height: 20,
    width: 20,
  },
  seperator: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#204060',
    height: 0.5,
  },

  sideMenuContainer: {
    flex: 1,
    // backgroundColor: "#fff",
    // shadowColor: "#000",
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // shadowOffset: {
    //   height: 0,
    //   width: 2,
    // },
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    // backgroundColor: '#fff',
  },
  btnIcon: {
    flex: 1,
    textAlign: 'center',
    color: '#555',
  },
  btnText: {
    flex: 3,
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 20,
    color: '#454545',
  },
});


export default SideMenu;
