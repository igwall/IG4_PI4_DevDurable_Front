import {createAppContainer, createStackNavigator} from "react-navigation";
import Registration from "./registration/Registration";
import ConnectScreen from './connection/ConnectScreen'

export default createAppContainer(
    createStackNavigator({
        Connection: {screen: ConnectScreen},
        Registration: {screen: Registration}
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    })
)