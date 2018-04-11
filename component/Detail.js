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
export default class Detail extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({navigation}) => ({
        headerTitle: (
          <TouchableOpacity
              style={{width: '80%', alignItems:'center'}}>
              <Text numberOfLines={1} style={{  color: '#fff', fontSize: 20, }}>{navigation.state.params.data.title}</Text>
          </TouchableOpacity>
          ),
        headerLeft: (<TouchableOpacity onPress={() => {navigation.goBack();}} style={ styles.btn}>
          <FontAwesome name='chevron-left' size={20} color="#fff" style={{ fontFamily: 'FontAwesome'}}/>
        </TouchableOpacity>),
      });
    render() {
        const {state} = this.props.navigation;
        let item = state.params.data;
        return (
            <View style={styles.container}>
                <Image source={{ uri: item.img }} style={styles.wrapper}/>
                <Text style={styles.items_title}>{item.title}</Text>
                <View style={[styles.items, styles.mb10]}>
                    <View style={styles.items_price}>
                        <Text style={styles.fs12}>原价</Text>
                        <Text style={[styles.line_through, styles.fs12]}>￥{item.originPrice}</Text>
                    </View>
                    <View style={styles.price_wrapper}>
                        <TouchableOpacity style={styles.buy_btn}>
                            <Text style={styles.current_price}>￥{item.price}  </Text>
                            <Text style={styles.current_price}>立即购买</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.plr10,styles.ptb10, styles.row, styles.borderTB]}>
                    <FontAwesome name='map-marker' size={30} color="#A58C63" style={{ flex: 1, fontFamily: 'FontAwesome'}}/>
                    <View style={{ flex: 9 }}>
                        <Text style={{ fontSize: 16, color: '#666'}}>商家地址：</Text>
                        <Text style={{ fontSize: 12 }}>{item.address}</Text>
                    </View>
                </View>
                <View style={[styles.around, styles.ptb10]}>
                    <View style={styles.center}>
                        <FontAwesome name='check-circle' size={12} color="#A58C63" style={{ paddingRight: 4, fontFamily: 'FontAwesome'}}/>
                        <Text style={{fontSize: 12, color: '#A58C63'}}>无需预约</Text>
                    </View>
                    <View style={styles.center}>
                        <FontAwesome name='check-circle' size={12} color="#A58C63" style={{ paddingRight: 4, fontFamily: 'FontAwesome'}}/>
                        <Text style={{fontSize: 12, color: '#A58C63'}}>过期自动退</Text>
                    </View>
                    <View style={styles.center}>
                        <FontAwesome name='user-circle-o' size={12} color="#666" style={{ paddingRight: 4, fontFamily: 'FontAwesome'}}/>
                        <Text style={{fontSize: 12, color: '#666'}}>已售{item.sales}</Text>
                    </View>
                </View>
                <View style={[styles.borderTB, styles.line]}></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexWrap: 'wrap',
    },
    plr10: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    ptb10: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    borderTB: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#ccc',
        borderBottomColor: '#ccc',
    },
    row: {
        flexDirection:   'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    around: {
        flexDirection:   'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    center: {
        flexDirection:   'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        backgroundColor: '#ccc',
        height: 10,
    },
    btn: {
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
    },
    mb10: {
        marginBottom: 10,
    },
    wrapper: {
        width: '100%',
        height: 200,
    },
    items: {
        paddingLeft: 10,
        paddingRight: 10,
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
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        
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
        textDecorationStyle: 'solid',
    },
    items_price: {
        flex: 1,
        flexDirection:   'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },
    current_price: {
        color: '#fff',
        fontSize: 16,
    },
    price_wrapper: {
        flex: 1,
        flexDirection:   'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buy_btn: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection:   'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A58C63',
        borderRadius: 6,
    },
})