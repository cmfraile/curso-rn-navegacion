import { useNavigation } from "@react-navigation/native";
import { Text, View , Button , TouchableOpacity , ImageBackground } from "react-native";
import styles from "../../styles/style";

/*<Button title='Second' onPress={ () => popToTop() }/>*/
/*<Button title='User' onPress={() => navigate('User',{id:1,nombre:'Perupillo'}) } />*/

const Third = () => {

    const { popToTop , navigate } = useNavigation<{popToTop:() => void,navigate:(route:string,args:any) => void}>();

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            
            <TouchableOpacity style={styles.button} onPress={() => navigate('User',{id:1,nombre:'Perupillo'}) } >
                <ImageBackground source={require('../../assets/j1.jpg')} resizeMode="cover" style={styles.backgroundImage} />
                <Text>Jonathan</Text>
            </TouchableOpacity>

        </View>
    )

};

export default Third