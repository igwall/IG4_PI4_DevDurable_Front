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
                ]}
                renderItem={item => this.renderItem(item)}
                style={{flex: 1}}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {

        flex: 1,
        flexDirection: 'column',
    },
    row: {
        backgroundColor: Style.bluegreen,
        borderRadius: 10,
        height: 125,
        marginHorizontal: 10,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});