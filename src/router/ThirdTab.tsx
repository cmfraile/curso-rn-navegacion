import { NavigationContainer } from "@react-navigation/native"
import Uno from "../screens/third/Uno";
import Dos from "../screens/third/Dos";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator()
const DrawerApp = () => {
  
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Uno" component={Uno} />
        <Drawer.Screen name="Dos" component={Dos} />
      </Drawer.Navigator>
    );
}

const ThirdTab = () => 
    <NavigationContainer>
        <DrawerApp/>
    </NavigationContainer>

export default ThirdTab