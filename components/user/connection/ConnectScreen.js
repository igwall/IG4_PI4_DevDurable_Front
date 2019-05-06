import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'
import Style from '../../../styles/Style'

export default class ConnectScreen extends React.Component {

    todo() {
        console.log("TODO")
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/homebg.png')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex: 0.4}}/>
                    <View style={{flex: 0.6, alignItems: 'center'}}>
                        <Text style={styles.textTitle}>Bienvenue sur Mobilogie</Text>
                        <Text style={styles.text}>Vos trajets quotidiens simplifiés avec un impact environnemental !</Text>
                        <Text style={{color: Style.white, fontWeight: 'bold', marginTop: 30}}>SE CONNECTER AVEC</Text>
                        <TouchableOpacity style={styles.buttonEmail}>
                            <Text style={{color: Style.white, fontWeight: 'bold'}}>EMAIL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOther}>
                            <Text style={{color: Style.darkblue, fontWeight: 'bold'}}>GOOGLE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOther}>
                            <Text style={{color: Style.darkblue, fontWeight: 'bold'}}>FACEBOOK</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Style.darkblue
    },
    textTitle: {
        color: Style.white,
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: "center"
    },
    text: {
        color: Style.white,
        fontSize: 12,
        padding: 10,
        textAlign: "center"
    },
    buttonEmail: {
        marginTop: 5,
        backgroundColor: Style.bluegreen,
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        width: 300,
        color: Style.white
    },
    buttonOther: {
        marginTop: 5,
        backgroundColor: Style.white,
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        width: 300,
        color: Style.darkblue
    }
});
