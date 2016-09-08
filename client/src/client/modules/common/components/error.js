/**
 * Created by rn1466 on 27/08/16.
 */
import React, { Component } from "react";
import { View, Text } from 'react-native';

export default class Error extends Component {
    render() {
        console.log('ERROR');
        return (
            <View>
                <Text>Error</Text>
            </View>
        );
    }
}