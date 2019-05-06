import React from 'react'
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import Style from "../../styles/Style";

export default class Trajets extends React.Component {

    //We define here the icon for the tab bar
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return <Ionicons name="ios-pin" size={28} color={tintColor}/>;
        }
    }

    renderItem = data =>
        <TouchableOpacity style={styles.row}>
           <Text style={{color: Style.white, fontWeight: 'bold'}}>{data.item.key}</Text>
        </TouchableOpacity>

    renderItem2 = data =>
        <TouchableOpacity style={styles.row2}>
            <Text style={{color: Style.white, fontWeight: 'bold'}}>{data.item.key}</Text>
        </TouchableOpacity>

    render() {
        return (
            <View style={{flex: 1}}>
                    <FlatList
                        contentContainerStyle={styles.list2}
                        data={[
                            {key: 'Trajet1'},
                        ]}
                        renderItem={item => this.renderItem2(item)}
                        style={{flex: 1}}
                    />
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={[
                            {key: 'Trajet1'},
                            {key: 'Trajet2'},
                            {key: 'Trajet3'},
                            {key: 'Trajet4'},
                            {key: 'Trajet5'},
                            {key: 'Trajet6'},
                            {key: 'Trajet7'},
                            {key: 'Trajet8'},
                        ]}
                        renderItem={item => this.renderItem(item)}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
    },
    list2: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        backgroundColor: Style.darkpurple,
        borderRadius: 10,
        width: 125,
        height: 125,
        marginHorizontal: 10,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row2: {
        backgroundColor: Style.bluegreen,
        borderRadius: 10,
        height: 125,
        marginHorizontal: 10,
        marginTop: 5,
        alignItems: 'center',
    }
});
