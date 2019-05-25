import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Location, Permissions} from 'expo';
import MapView, {Marker} from 'react-native-maps'
import {Ionicons} from '@expo/vector-icons';
import {getBusStops, getTramStops} from "../../api/transport_api";

export default class Map extends React.Component {

    //We define here the icon for the tab bar
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return <Ionicons name="md-search" size={32} color={tintColor}/>;
        }
    }

    //State of the component
    state = {
        locationPermissions: false,
        location: null,
        latitude: null,
        longitude: null,
        locationResult: null,
        mapToDisplay: null,
        stopsBus: null,
        stopsTram: null
    };

    //Function called when the component is mounted
    componentDidMount() {
        this._getLocalisationPermission();
        this.getBusStops();
        this.getTramStops();
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
        this.setState({location: JSON.stringify(loc), latitude: loc.coords.latitude, longitude: loc.coords.longitude});
        this.setState({
            mapToDisplay: {
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        });
    };

    //get bus stops from the api
    getBusStops() {
        getBusStops().then((results) => {
            this.setState({stopsBus: results.stops})
        })
    }

    //get tram stops from the api
    getTramStops() {
        getTramStops().then((results) => {
            this.setState({stopsTram: results.stops})
        })
    }


    //we create the bus stop markers outside of the render method
    renderBusMarkers() {
        const markers = [];
        var stops = this.state.stopsBus
        for (var i = 0; i < stops.length; i++) {
            markers.push(<Marker key={i}
                                         coordinate={{latitude: stops[i].stop_lat, longitude: stops[i].stop_lon}}
                                         title={stops[i].stop_name} pinColor={'orange'}
            />)
        }
        return markers
    };

    //we create the tram stop markers outside of the render method
    renderTramMarkers() {
        const markers = [];
        var stops = this.state.stopsTram
        for (var i = 0; i < stops.length; i++) {
            markers.push(<Marker key={i}
                                         coordinate={{latitude: stops[i].stop_lat, longitude: stops[i].stop_lon}}
                                         title={stops[i].stop_name} pinColor={'blue'}
            />)
        }
        return markers
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
                            clustering = {true}
                            clusterColor = '#000'
                            clusterTextColor = '#fff'
                            clusterBorderColor = '#fff'
                            clusterBorderWidth = {4}
                            style={{flex: 1}}
                            region={this.state.mapToDisplay}
                        ><Marker
                            coordinate={{latitude: 43.6327275, longitude: 3.8628894}}
                            title="Vous êtes ici"
                            pinColor={'red'}
                        />{this.renderBusMarkers()}{this.renderTramMarkers()}</MapView> : <ActivityIndicator size="large"/>
                }
            </View>
        );
    }
}