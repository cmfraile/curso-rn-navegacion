import { NavigationContainer } from "@react-navigation/native"
import Uno from "../screens/third/Uno";
import Dos from "../screens/third/Dos";
import Tres from "../screens/third/Tres";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useEffect } from "react";

const Drawer = createDrawerNavigator()
const DrawerApp = () => {

    useEffect(() => console.log('Drawer CL'),[])
  
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Uno" component={Uno} />
        <Drawer.Screen name="Dos" component={Dos} />
        <Drawer.Screen name="Tres" component={Tres} />
      </Drawer.Navigator>
    );
}

const ThirdTab = () => 
    <NavigationContainer>
        <DrawerApp/>
    </NavigationContainer>

export default ThirdTab