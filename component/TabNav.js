import React, { Component } from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class TabNav extends React.Component { 
    render() {
        return (
            // <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }
            //         style={ {tintColor: this.props.tintColor, width: 25, height: 25} }
            <FontAwesome name={this.props.iconName} size={20} color={this.props.focused ? this.props.selectedColor : this.props.normalImage } style={{fontFamily: 'FontAwesome'}}/>       
        )
    }
}