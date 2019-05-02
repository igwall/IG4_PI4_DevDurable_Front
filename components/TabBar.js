import React from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Style from '../styles/Style'

import Map from './map/Map'
import Trajets from './trajet/Trajets'
import Message from './message/Message'


//Tab navigator placed at the bottom
export default createAppContainer(
    createBottomTabNavigator({
        //We define here each tab
        Trajets: { screen: Trajets},
        Search: { screen: Map},
        Message: { screen: Message }
    }, {
        initialRouteName: 'Trajets',
        tabBarOptions: {
            //We want to display icons and not labels
            showIcon: true,
            showLabel: true,
            activeTintColor: Style.white,
            inactiveTintColor: Style.lightpurple,
            style: {
                backgroundColor: Style.darkpurple
            }
        }
    })
)
