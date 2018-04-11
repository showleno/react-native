/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';

import { StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import Home from './component/Main';
import Profile from './component/Profile';
import TabNav from './component/TabNav';
import List from './component/List';
import Detail from './component/Detail';
import FindStore from './component/FindStore';
import Mine from './component/Mine';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 底部导航
const Tab = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      //tab 的属性
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => (
        <TabNav
          tintColor={tintColor}
          focused={focused}
          normalImage='#fda085'
          selectedColor='orange'
          iconName='home'
        />
      )
    })
  },
  List: {
    screen: List,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '包子',
      tabBarIcon: ({focused, tintColor}) => (
        <TabNav
          tintColor={tintColor}
          focused={focused}
          normalImage={'#fda085'}
          selectedColor={'orange'}
          iconName={'database'}
        />
      )
    })
  },
  Found: {
    screen: FindStore,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '发现',
      tabBarIcon: ({focused, tintColor}) => (
        <TabNav
          tintColor={tintColor}
          focused={focused}
          normalImage={'#fda085'}
          selectedColor={'orange'}
          iconName={'search'}
        />
      )
    })
  },
  Mine: {
    screen: Mine,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({focused, tintColor}) => (
        <TabNav
          tintColor={tintColor}
          focused={focused}
          normalImage={'#fda085'}
          selectedColor={'orange'}
          iconName={'user-circle'}
        />
      )
    })
  },
},
  {
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    lazy:true,
    tabBarOptions:{
      activeTintColor:'#06c1ae',
      inactiveTintColor:'#979797',
      style:{backgroundColor:'#ffffff', height: 55,},
      indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
        height: 0,
      },
      labelStyle: {
        fontSize: 14, // 文字大小
        marginTop: -5,
        marginBottom: 5,
      },
    }
});
// 顶部导航
const Navigator = StackNavigator(
  {
    Tab: { screen: Tab },
    Profile: { screen: Profile },
    Detail: { screen: Detail },
  },
  {
    navigationOptions: ({navigation}) => ({
      headerBackTitle: null,
      headerTinitColor: '#297889',
      showIcon: true,
      headerStyle: {
        backgroundColor: '#fda085',
        elevation: 0,
        height:50,
      },
    }),
    mode:'card',
  }
)
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
		<Navigator />
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  topBar: {
	justifyContent: 'space-between',
	alignItems: 'center',
	backgroundColor: '#000'
  }
  
});
