import React, { Component } from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    Button,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class Mine extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: (
          <TouchableOpacity
              style={{width: '80%', alignItems:'center'}}>
              <Text style={{  color: '#fff', fontSize: 20, }}>我的</Text>
          </TouchableOpacity>
          ),
        headerLeft: (<TouchableOpacity onPress={() => {navigation.goBack();}} style={ styles.btn}>
          <FontAwesome name='chevron-left' size={20} color="#fff" style={{ fontFamily: 'FontAwesome'}}/>
        </TouchableOpacity>),
      });
    render() {
        return (
            <View>
                <Text>你好啊</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
    },
    btnText: {
      color: '#fff',
    }
  })