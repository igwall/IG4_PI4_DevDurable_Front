import React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Style from "../../styles/Style";

export default class Covoiturage extends React.Component {

    renderItem = data =>
        <TouchableOpacity style={styles.row}>
            <Text style={{color: Style.bluegreen, fontWeight: 'bold'}}>{data.item.key}</Text>
        </TouchableOpacity>


    render() {
        return (
            <FlatList
                horizontal={true}
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
    row: {
        backgroundColor: Style.white,
        borderRadius: 10,
        width: 125,
        height: 125,
        marginHorizontal: 10,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});