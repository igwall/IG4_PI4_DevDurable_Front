import React from 'react';
import {StatusBar, View} from 'react-native';
import Connection from './components/user/connection/ConnectScreen'
import TabBar from './components/TabBar'

export default class App extends React.Component {

    render() {
        return (
            <View  style={{flex: 1}}>
                <StatusBar hidden={true}/>
                <TabBar />
            </View>
        );
    }
}
