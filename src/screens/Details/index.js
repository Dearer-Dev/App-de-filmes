import {View, Text, Image, StyleSheet} from "react-native"
import { useRoute } from "@react-navigation/native"

import Stars from 'react-native-stars'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Detalhes (){

    const route = useRoute();

    return(
        <View style={styles.body}>

            <Image style = {styles.img} source={{uri : route.params.img}}/>
            <Text style = {styles.titulo}>{route.params.titulo}</Text>
            <Text style = {styles.nota}>{route.params.nota}</Text>
             <View style={{alignItems:'center'}}>
            <Stars
                default={route.params.nota}
                count={5}
                half={true}
                starSize={250}
                disabled = {true} 
                fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
            />

            <Text style={styles.descricao}>{route.params.desc}</Text>

            
        </View>   
            
            
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: '#141a29',
        alignItems: 'center',
        textAlign: "auto"
    },
    img: {
    width: 250,
    height: 400,
    borderRadius: 10,
    marginTop: 20,
    },
    titulo: {
        color: "white",
        fontSize: 25,
        marginTop: 10,
    },
    descricao:{
        color: 'white',
        fontSize: 18,
        marginLeft:10,
        marginRight: 10,

    },
    nota: {
        fontSize: 20,
        color: 'white',
    },
    myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  }

})