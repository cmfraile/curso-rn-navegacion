import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { RootStackParamsFirstAndDirt } from "../../router/FirstAndDirt";

interface userProps extends NativeStackScreenProps<RootStackParamsFirstAndDirt,'User'>{};
interface myRouterParams { id:number , nombre:string }
const User = ({route:{params}}:userProps) => {

    const { id , nombre } = params;

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>{JSON.stringify(params)}</Text>
        </View>
    )

};

export default User