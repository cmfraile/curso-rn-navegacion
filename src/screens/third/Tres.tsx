import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Lorem from "./Lorem";
import Ipsum from "./Ipsum";
import Dolor from "./Dolor";
import { Text, View } from 'react-native';
import MyIcons from '../../components/Icon';

const Tab = createMaterialTopTabNavigator();

const Tres = () => {

    return(
        <Tab.Navigator
            initialRouteName='Lorem'
            screenOptions={(p1) => ({
                tabBarIcon:() => <MyIcons/>
            })}
        >
            <Tab.Screen name="Lorem" component={Lorem} />
            <Tab.Screen name="Ipsum" component={Ipsum} />
            <Tab.Screen name="Dolor" component={Dolor} />
        </Tab.Navigator>
    )

}

export default Tres