import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../screens/second/main.screen';
import Settings from '../screens/second/settings.screen';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={Main} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );

}

export default MyDrawer