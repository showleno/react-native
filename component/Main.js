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
    ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchInput from './SearchInput';
import SlideShow from './SlideShow';
import NavLink from './NavLink';
import List from './List';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: null,
            nav: null,
            ad: null,
        }
    }
    componentDidMount() {
        fetch('https://easy-mock.com/mock/5aab213ee80e0d51a5160f87/rn/query')
        .then((response)=> response.json())
        .then((jsonData)=> {
            this.setState({
                banner: jsonData.data.banner,
                nav: jsonData.data.nav,
                ad: jsonData.data.ad,
            })
        })
        .catch((error)=> {
            console.log(error)
        })
    }
    static navigationOptions = ({navigation}) =>({
      headerTitle: (
        <TouchableOpacity
            style={{width: '100%', alignItems:'center'}}>
            <Text style={{  color: '#fff', fontSize: 20, }}>里昂包子铺</Text>
        </TouchableOpacity>
        ),

      headerRight: (
        <TouchableOpacity onPress={()=> navigation.navigate('Profile')} style={ styles.btn}>
            <FontAwesome name='star' size={20} color="yellow" style={{ fontFamily: 'FontAwesome'}}/>
        </TouchableOpacity>),

      headerLeft: (
        <TouchableOpacity onPress={() => {navigation.goBack();}} style={ styles.btn}>
          <FontAwesome name='align-justify' size={20} color="#fff" style={{ fontFamily: 'FontAwesome'}}/>
        </TouchableOpacity>),
    });
    render() {
      return (
        <View style={styles.container}>
        <ScrollView>
            {this.state.banner==null ? <Text></Text> : <SlideShow receive={this.state.banner}/>}
            {this.state.nav==null ? <Text></Text> : <SearchInput />}
            {this.state.nav==null ? <Text></Text> : <NavLink receive={this.state.nav}/>}
            {this.state.nav==null ? <Text></Text> : <NavLink receive={this.state.nav}/>}
            {this.state.ad==null ? <Text></Text> : this.state.ad.map((item, i) => <Image key={i} source={{ uri: item.img }} style={{ width: '100%', height: 100}} />) }
            {this.state.nav==null ? <Text></Text> : <View style={{ padding: 10, paddingBottom: 4, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
                <FontAwesome name='map-marker' size={18} color='#A58C63' style={{ fontFamily: 'FontAwesome'}}/>
                <Text style={{ fontSize: 18, color: '#333', fontWeight: 'bold', paddingLeft: 5}}>热销食粮</Text>
            </View>}
            {this.state.nav==null ? <Text></Text> : <List navigator={this.props.navigation}/>}
        </ScrollView>
        </View>
      )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    btn: {
        justifyContent:'center',
        alignItems: 'center',
        padding: 10,
    },
    btnText: {
        color: '#fff',
    },
})