import {createAppContainer, createStackNavigator} from "react-navigation";
import Registration from "./registration/Registration";
import ConnectScreen from './connection/ConnectScreen'
import Connection from './connection/Connection'
import TabBar from  '../TabBar'

export default createAppContainer(
    createStackNavigator({
        Connection: {screen: ConnectScreen},
        Registration: {screen: Registration},
        Login: {screen: Connection},
        TabBar: {screen: TabBar}
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    })
)