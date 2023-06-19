import { Text } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lorem from "./Lorem";
import Ipsum from "./Ipsum";
import Dolor from "./Tres";
import { useEffect } from "react";

const Tab = createBottomTabNavigator();
const MyTabs = () => {

    useEffect(() => console.log('Tab CL'),[])

  return (
        <Tab.Navigator
            initialRouteName="Lorem"
            screenOptions={(p1) => ({
                headerShown:false,
                headerTintColor:'yellow',
                tabBarIcon:(p2) => <Text>{p1.route.name}</Text>,
                tabBarLabel:(p2) => <></>
                //tabBarStyle:{}
            })}
        >
            <Tab.Screen name="Lorem" component={Lorem} />
            <Tab.Screen name="Ipsum" component={Ipsum} />
            <Tab.Screen name="Dolor" component={Dolor} />
        </Tab.Navigator>
  );
}

const Dos = () => {

    return <MyTabs/>

}

export default Dos