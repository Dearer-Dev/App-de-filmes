import {View, Text, Image} from "react-native"
import { useRoute } from "@react-navigation/native"
import Routes from "../../routes"

export default function Detalhes (){

    const route = useRoute();

    return(
        <View>

            <Image style = {{height: 500, width: 500}} source={{uri : route.params.img}}/>
            <Text>{route.params.titulo}</Text>
            <Text>{route.params.nota}</Text>
            
        </View>
    )
}
