import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BannerFilmes from '../../components/bannerFilmes'
import dados from "../../components/data/data.js";
import Header from "../../components/header";
import Search from "../../components/searchbar";
import CardMovies from "../../components/cardMovies";
import { useState, useEffect } from "react";



export default function App(){

  const [filmes, setFilmes] = useState(['']);

  useEffect(()=>{

    async function buscarFilmes(){
      
    }


  },[])



  return (
    <View style={style.container}>
      <Header></Header>
      <Search></Search>
      <BannerFilmes></BannerFilmes>

      <View style={{width:'90%'}}>
        <FlatList
          data = {dados}

          horizontal = {true}

          keyExtractor={(item) => item.id}

          renderItem= {({item}) => (
            
             <CardMovies titulo = {item.nome}  nota = {item.nota}  img = {item.img} desc={item.desc}></CardMovies>
          
                
          
          )
        }

        />

      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems:"center"
  }
})
