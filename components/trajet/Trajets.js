import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Style from "../../styles/Style";

export default class Trajets extends React.Component{

    //We define here the icon for the tab bar
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return <Ionicons name="ios-pin" size={28} color={tintColor} />;
        }
    }

    render() {
        return (
            <View>
            </View>
        );
    }
}