import { useNavigation } from "@react-navigation/native";
import { Text, View , Button } from "react-native";

const Third = () => {

    const { popToTop , navigate } = useNavigation<{popToTop:() => void,navigate:(route:string,args:any) => void}>();

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Hola Third</Text>
            <Button
                title='Second'
                onPress={() => popToTop() }
            />
            <Button
                title='User'
                onPress={() => navigate('User',{id:1,nombre:'Perupillo'}) }
            />
        </View>
    )

};

export default Third