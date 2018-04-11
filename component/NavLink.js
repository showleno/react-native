import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    FlatList,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
export default class NavLink extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.iconItem}>
                {
                    this.props.receive.map( (item,i)=> 
                    <View style={styles.items} key={i}>
                        <View style={styles.wrapper}>
                        <Image source={{ uri: item.img }} style={styles.iconWidth} />
                        </View>
                        <Text style={styles.itemsText}>
                            {item.text}
                        </Text>
                    </View>)
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    iconItem: {
        width: '100%',
        marginTop: 10,
        justifyContent: 'space-around',
        alignContent: 'center',
        flexDirection: 'row',
    },
    itemsText: {
        color: '#333',
        fontSize: 12,
        lineHeight: 40,
    },
    iconWidth: {
        width: '100%',
        height: '100%',
    },
    wrapper: {
        width: '100%',
        height: 40,
    },
})