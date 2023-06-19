import 'react-native-gesture-handler';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from '../screens/Second/FirstScreen';
import SecondScreen from '../screens/Second/SecondScreen';
import { Image, Text , TouchableOpacity, View } from 'react-native';


const Drawer = createDrawerNavigator();

const CustomIcon = () => 
  <Image
    source={require('../assets/shark.png')}
    style={{width:150,height:150,marginTop:30}}
  />

const InsideDrawer = (props:DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <CustomIcon/>
      </View>
      <DrawerItem
        label='first'
        onPress={() => props.navigation.navigate('First')}
      />
      <DrawerItem
        label='second'
        onPress={() => props.navigation.navigate('Second')}
      />
      <TouchableOpacity>
        <Text>Custom BTN</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  )

}

const DrawerApp = () => {
  return (
    <Drawer.Navigator
      initialRouteName='First'
      drawerContent={ (props) => <InsideDrawer {...props}/> }
      screenOptions={{
        //drawerType:'permanent'
      }}
    >
      <Drawer.Screen name="First" component={FirstScreen} />
      <Drawer.Screen name="Second" component={SecondScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerApp