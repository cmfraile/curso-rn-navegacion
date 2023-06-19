import { Text } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lorem from "./Lorem";
import Ipsum from "./Ipsum";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const MyTabs = () => {

    useEffect(() => console.log('Tab CL'),[])

  return (
        <Tab.Navigator
            initialRouteName="Lorem"
            screenOptions={(p1) => ({
                headerShown:false,
                tabBarIcon:(p2) => <Text>{p1.route.name}</Text>,
                tabBarLabel:(p2) => <></>
                //tabBarStyle:{}
            })}
        >
            <Tab.Screen name="Lorem" component={Lorem} />
            <Tab.Screen name="Ipsum" component={Ipsum} />
        </Tab.Navigator>
  );
}

const Dos = () => {

    return <MyTabs/>

}

export default Dos