import { useEffect } from "react";
import { Text, View } from "react-native";
import MyIcons from "../../components/Icon";

const Dolor = () => {

    useEffect(() => console.log('Lorem CL'),[])

    return(
        <View>
            <MyIcons/>
            <MyIcons/>
            <MyIcons/>
        </View>
    )

}

export default Dolor