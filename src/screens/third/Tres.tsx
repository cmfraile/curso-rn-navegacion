import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Lorem from "./Lorem";
import Ipsum from "./Ipsum";
import Dolor from "./Dolor";
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Tres = () => {

    return(
        <Tab.Navigator
            initialRouteName='Lorem'
            screenOptions={(p1) => ({
                tabBarIndicator:(p2) => <></>
            })}
        >
            <Tab.Screen name="Lorem" component={Lorem} />
            <Tab.Screen name="Ipsum" component={Ipsum} />
            <Tab.Screen name="Dolor" component={Dolor} />
        </Tab.Navigator>
    )

}

export default Tres