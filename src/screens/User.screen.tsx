import { Text, View } from "react-native";

const User = ({route:{params}}:any) => {

    console.log(params)

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>{JSON.stringify(params)}</Text>
        </View>
    )

};

export default User