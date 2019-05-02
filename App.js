import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Marker, LatLng} from 'react-native-maps';
import {Constants, MapView, Location, Permissions} from 'expo';

export default class App extends React.Component {

    //State of the component
    state = {
        locationPermissions: false,
        location: null,
        locationResult: null,
        mapToDisplay: null,
        pointer: null
    };

    //Function called when the component is mounted
    componentDidMount() {
        this._getLocalisationPermission();
    }

    //Asynchronous function to get the location of the user
    _getLocalisationPermission = async () => {
        //We ask for the the permission to access the location
        let {status} = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== 'granted') {
            this.setState({
                locationResult: 'Geolocalisation refusée !',
            });
        } else {
            this.setState({locationPermissions: true});
        }

        //Get the location
        console.log(this.state.locationPermissions)
        let loc = await Location.getCurrentPositionAsync({});
        console.log(loc)
        //Update state
        this.setState({location: JSON.stringify(loc)});
        this.setState({
            mapToDisplay: {
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            pointer :  {
              latitude : loc.coords.latitude,
              longitude : loc.coords.longitude
            }
        });
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={styles.container}>
                    Front POC PSL
                </Text>

                {
                    (this.state.location !== null) ?
                    <MapView
                    style={{flex: 1}}
                    region={this.state.mapToDisplay}
                    >
                    <Marker coordinate={this.state.pointer} title={"Vous êtes ici"} />
                    </MapView> 
                    :
                    <Text>Waiting...</Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 20
    },
});

