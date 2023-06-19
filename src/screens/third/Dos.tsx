import { Text } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lorem from "./Lorem";
import Ipsum from "./Ipsum";
import { useEffect } from "react";

const Tab = createBottomTabNavigator();
const MyTabs = () => {

    useEffect(() => console.log('Tab CL'),[])

  return (
    <Tab.Navigator
        initialRouteName="Lorem"
        screenOptions={{headerShown:false}}
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