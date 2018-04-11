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
import Swiper from 'react-native-swiper';

export default class SlideShow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Swiper height={200} horizontal={true} autoplay>
                    {
                        this.props.receive.map((item, i) => <View style={styles.slide} key={i} detail={item}>
                            <Image resizeMode='stretch' source={{uri: item.img }} style={styles.imgWidth} />
                        </View>)
                    }
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 200,
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    imgWidth: {
        width: '100%',
        height: 200,
    }
})