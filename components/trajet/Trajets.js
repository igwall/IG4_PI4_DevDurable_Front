import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import Style from "../../styles/Style";
import Actu from './ActuTrajet'
import Covoiturage from './Covoiturage'
import TrajetsEcologiques from './TrajetsEcologiques'
import deviceStorage from '../../services/DeviceStorage'

export default class Trajets extends React.Component {

    //We define here the icon for the tab bar
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return <Ionicons name="ios-pin" size={28} color={tintColor}/>;
        },
    }

    state = {
        token: null
    };

    componentDidMount() {
        deviceStorage.getValue('id_token').then((data) => this.setState({token: data}))
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: Style.darkblue}}>
                <View style={{marginBottom: 10, flexDirection: 'row', marginTop: 10}}>
                    <View style={{marginLeft: 10, flex: 0.9}}>
                        <Text style={{color: Style.white}}>Header</Text>
                    </View>
                    <View style={{flex: 0.1, marginRight: 10}}>
                        <TouchableOpacity style={styles.buttonAdd}>
                            <Text style={{color: Style.white, fontWeight: 'bold'}}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Actu />
                    <Text style={styles.labelList}>Trajets écologiques</Text>
                    <TrajetsEcologiques/>
                    <Text style={styles.labelList}>Covoiturage</Text>
                    <Covoiturage/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    labelList: {
        color: Style.white,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 20
    },
    buttonAdd: {
        backgroundColor: Style.darkblue
    }
});
