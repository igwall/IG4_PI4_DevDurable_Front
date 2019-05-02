import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {MapView, Location, Permissions} from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Style from "../../styles/Style";

export default class Map extends React.Component {

    //We define here the icon for the tab bar
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return <Ionicons name="md-search" size={32} color={tintColor} />;
        }
    }

    //State of the component
    state = {
        locationPermissions: false,
        location: null,
        locationResult: null,
        mapToDisplay: null
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
        let loc = await Location.getCurrentPositionAsync({});
        //Update state
        this.setState({location: JSON.stringify(loc)});
        this.setState({
            mapToDisplay: {
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        });
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>
                    Location: {this.state.location}
                </Text>
                {
                    (this.state.location !== null) ?
                        <MapView
                            style={{flex: 1}}
                            region={this.state.mapToDisplay}
                        /> :
                        <ActivityIndicator size="large"/>
                }
            </View>
        );
    }
}