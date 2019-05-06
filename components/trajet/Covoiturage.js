import React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Style from "../../styles/Style";

export default class Covoiturage extends React.Component {

    renderItem = data =>
        <TouchableOpacity style={styles.row}>
            <Text style={{color: Style.white, fontWeight: 'bold'}}>{data.item.key}</Text>
        </TouchableOpacity>


    render() {
        return (
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
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: 'row',
    },
    row: {
        backgroundColor: Style.lightpurple,
        borderRadius: 10,
        height: 125,
        width: 125,
        marginHorizontal: 10,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
});