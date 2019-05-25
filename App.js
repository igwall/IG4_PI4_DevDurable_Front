import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import NavigationLogin from './components/user/NavigationLogin'
import TabBar from './components/TabBar'

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView  style={{flex: 1}}>
                <StatusBar hidden={true}/>
                <TabBar />
            </SafeAreaView>
        );
    }
}
