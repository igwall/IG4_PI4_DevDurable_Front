import React from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import Style from "../../styles/Style";
import Actu from './ActuTrajet'
import Covoiturage from './Covoiturage'
import TrajetsEcologiques from './TrajetsEcologiques'

export default class Trajets extends React.Component {

    //We define here the icon for the tab bar
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return <Ionicons name="ios-pin" size={28} color={tintColor}/>;
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: Style.darkblue}}>
                <View style={{flex: 1}}>
                    <Actu/>
                    <Text style={styles.labelList}>Trajets écologiques</Text>
                    <TrajetsEcologiques/>
                    <Text style={styles.labelList}>Covoiturage</Text>
                    <Covoiturage/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    labelList: {
        color: Style.white,
        fontWeight: 'bold',
        marginLeft: 10
    }
});
