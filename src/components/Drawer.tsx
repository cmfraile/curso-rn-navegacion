import 'react-native-gesture-handler';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from '../screens/Second/FirstScreen';
import SecondScreen from '../screens/Second/SecondScreen';
import { Image, Text , TouchableOpacity, View } from 'react-native';
import FirstAndDirt from '../router/FirstAndDirt';
import { useWindowDimensions } from 'react-native';

export type RootStackParamsSecond = {
  First : undefined ,
  Second : undefined
}


const Drawer = createDrawerNavigator<RootStackParamsSecond>();

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

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      initialRouteName='First'
      drawerContent={ (props) => <InsideDrawer {...props}/> }
      screenOptions={{
        drawerType:(width > 700) ? 'permanent' : 'front'
      }}
    >
      <Drawer.Screen name="First" component={FirstScreen} />
      <Drawer.Screen name="Second" component={FirstAndDirt} />
    </Drawer.Navigator>
  );
}

export default DrawerApp