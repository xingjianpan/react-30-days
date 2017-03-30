/**
 * Day 3
 * twitter entrance animation
 */
'use strict';

import React,{ Component } from 'react';
import { Platform,Animated,Easing,Image,RefreshControl,ScrollView,StatusBar,StyleSheet,TabBarIOS,Text,TouchableHighlight,TouchableOpacity,View } from 'react-native';
import Util from '../../utils';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Day1 from '../Day1';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class Entrance extends Component{
  static propTypes = {
    hideThis: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
       transformAnim: new Animated.Value(1),
       opacityAnim: new Animated.Value(1),
     };
  }

  componentDidMount() {
    Animated.timing(
       this.state.transformAnim,
       {toValue: 50,
        duration: 1200,
        delay:2000,
        easing: Easing.elastic(2),
      },
    ).start();
    Animated.timing(
       this.state.opacityAnim,
       {toValue: 0,
        duration: 800,
        easing: Easing.elastic(1),
        delay:2200,
      },
     ).start();
    setTimeout(() => {
      this.props.hideThis();
    }, 3300);
  }

  render () {
    return(
      <Animated.View style={[styles.entrance,{opacity:this.state.opacityAnim}]}>
        <AnimatedIcon size={60} style={[styles.twitter,{transform:[{scale:this.state.transformAnim}]}]} name="logo-twitter"></AnimatedIcon>
      </Animated.View>
    )
  }
}

class Twitter extends Component{
  constructor() {
    super();
    this.state = {
      show:true
    };
  }

  componentDidMount() {
    if(Platform.OS === "ios") {
      StatusBar.setBarStyle(0);
    }
  }

  _hideEntrance() {
    this.setState({
      show:false
    })
  }

  render() {
    let entrance = this.state.show? <Entrance hideThis={()=> this._hideEntrance()}/>:<View></View>
    return(
      <View style={styles.twitterContainer}>
        <Day1/>
        {entrance}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemWrapper:{
    backgroundColor: '#fff'
  },
  twitterContainer:{
    width: Util.size.width,
    height: Util.size.height
  },
  entrance:{
    position: "absolute",
    top:0, left:0,
    height: Util.size.height,
    width: Util.size.width,
    backgroundColor:"#1b95e0",
    alignItems:"center",
    justifyContent:"center"
  },
  twitter:{
    color:"#fff",
    position:"relative",
    top: -20,
    textAlign: "center"
  },
  nav:{
    flexDirection: "row",
    paddingTop: 30,
    borderBottomWidth: Util.pixel,
    borderBottomColor: "#ddd",
    paddingBottom:5,
    backgroundColor:"#fff"
  },
  navLeft:{
    flex:1,
    alignItems:"flex-start",
    justifyContent:"center",
  },
  navMid:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  navRight:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",
    flexDirection:"row"
  },
  twitterPostContainer:{
    width: Util.size.width,
    height:Util.size.height-90,
    position:"relative",
    top:-20
  },
  navAndroid:{
    backgroundColor:"#3195d7",
    width:Util.size.width,
    height:55,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingTop:15,
    paddingLeft:20,
    paddingRight:10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    backgroundColor:"#111"
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 35,
  },
  img: {
    width:375,
    height: 550,
  },
  title:{
    color:"#fff",
    fontSize:20,
    paddingLeft: 10
  },
  iconContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:60,
  },
  logoContainer:{
    flexDirection:"row",
    justifyContent:"flex-start",
  },
  tabView: {
    flex: 1,
    height: 500,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
});

export default Twitter;
