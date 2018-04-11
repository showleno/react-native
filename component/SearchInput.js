import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Platform,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
export default class SearchInput extends Component {
    constructor (props) {
        super(props);
        // 初始化输入的值text *1
        this.state = { text: '' };
    }
    fetchData = (enableCallback) => {
        console.log(this.state.name)
        // 接收父组件传来的属性值，就相当于另一个子组件互相通信
        fetch('https://easy-mock.com/mock/5a913169a2f38c18c96bcea0/leonshow/query?name='+this.state.name)
        .then( (response) => response.json())
        .then( (jsonData) => {
            console.log(jsonData);
        })
        .catch((error)=> {
            console.log(error)
        })
    }
    render() {
        return (
        <View style={styles.wrapper}>
            <TextInput 
            style={styles.input}
            placeholder="Search Something.."
            underlineColorAndroid='transparent'
            onChangeText={(text) => { this.setState({text:text});
            // 子组件向父组件传入当前输入的值text *5
            this.props.changeName(text);
            }}/>
            <TouchableOpacity onPress={this.fetchData} style={styles.btn} >
                <Text style={{color: '#fff', fontSize: 12}}>搜索</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        top: 15,
        flexDirection: 'row',
    },
    input: {
        width: 150,
        height: 30,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 30,
        backgroundColor: '#fff',
        fontSize: 12,
    },
    btn: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#ff9a9e',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 30,
    }
})