import React, { Component } from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    Button,
    Navigator,
    FlatList,
    Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Detail from './Detail';
export default class List extends Component {
    constructor(props) {
        super(props)
        this.state= {
            list: null, 
            refresh: true,
            navigator: props.navigation,
        }
    }
    static navigationOptions = ({navigation}) => ({
        headerTitle: (
          <TouchableOpacity
              style={{width: '80%', alignItems:'center'}}>
              <Text style={{  color: '#fff', fontSize: 20, }}>热门包子户</Text>
          </TouchableOpacity>
          ),
        headerLeft: (<TouchableOpacity onPress={() => {navigation.goBack();}} style={ styles.btn}>
          <FontAwesome name='chevron-left' size={20} color="#fff" style={{ fontFamily: 'FontAwesome'}}/>
        </TouchableOpacity>),
      });
    componentDidMount() {
        fetch('https://easy-mock.com/mock/5aaf2c42d40f641f5a4024ba/list/list')
        .then((response)=> response.json())
        .then((dataJson)=> {
            this.setState({
                list: dataJson.data
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    _onRefresh = () => alert('刷新完毕');
    render() {
        this.state.list == null ? this.state.refresh = true : this.state.refresh = false
        let navigator = this.props.navigator ? this.props.navigator : this.state.navigator
        return (
                <View>
                <View style={styles.row}>
                    <View style={styles.center}>
                        <FontAwesome name='map-marker' size={30} color="#A58C63" style={{ fontFamily: 'FontAwesome'}}/>
                        <Text>价格</Text>
                    </View>
                    <View style={styles.center}>
                        <FontAwesome name='map-marker' size={30} color="#A58C63" style={{ fontFamily: 'FontAwesome'}}/>
                        <Text>销量</Text>
                    </View>
                    <View style={styles.center}>
                        <FontAwesome name='map-marker' size={30} color="#A58C63" style={{ fontFamily: 'FontAwesome'}}/>
                        <Text>评价</Text>
                    </View>
                </View>
                <FlatList
                    data={this.state.list}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.refresh}
                    scrollEnabled={false}
                    renderItem={ ({item,i}) => <TouchableOpacity onPress={() => navigator.navigate('Detail',{data: item})} key={i}><View style={styles.items} key={i} >
                        <Image source={{uri: item.img}} style={{ flex: 1, width:'30%', height: 60}}/>
                        <View style={{ width: '70%', paddingLeft: 10}} >
                            <Text numberOfLines={1} style={[styles.items_text, styles.items_title]}>{item.title}</Text>
                            <Text numberOfLines={1} style={styles.items_text}>{item.address}</Text>
                            <View style={styles.items_price}>
                                <Text style={styles.fs12}>原价</Text>
                                <Text style={[styles.line_through,styles.fs12]}>￥{item.originPrice}</Text>
                                <Text style={styles.current_price}>￥{item.price}</Text>
                            </View>
                        </View>
                    </View></TouchableOpacity>}
                />
                </View>
                
        ) 
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    row: {
        flexDirection:   'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    center: {
        flexDirection:   'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
    },
    btnText: {
      color: '#fff',
    },
    items: {
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 10,
        paddingBottom: 10,
        flex:1,
        flexDirection:   'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    items_title: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: 16,
    },
    items_text: {
        flex: 2,
        width: '100%',
    },
    fs12: {
        fontSize: 12,
    },
    line_through: {
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    },
    items_price: {
        flexDirection:   'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },
    current_price: {
        color: 'red',
    }
  })