import React from 'react'
import {View, Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class Message extends React.Component{

    //We define here the icon for the tab bar
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return <Ionicons name="md-chatbubbles" size={26} color={tintColor} />;
        }
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <View>
                    <Text>Messagerie</Text>
                </View>
            </View>
        );
    }
}