import React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Style from "../../styles/Style";

export default class ActuTrajet extends React.Component {

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

            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'column'
    },
    row: {
        backgroundColor: Style.bluegreen,
        borderRadius: 10,
        height: 125,
        marginHorizontal: 10,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
});