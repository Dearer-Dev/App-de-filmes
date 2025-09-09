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
      const url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';
      const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTVhMmU4NTc5M2FkMzZlYjE2N2E5NGNkOWIwN2M1NiIsIm5iZiI6MTc1NjIyNjQyNS44MjUsInN1YiI6IjY4YWRlMzc5MDIxN2RkZjdkYzU0OGZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B3vvrM9b2oZ41ATNX3Bx3dWc_wffo-hMCQOMPUKVLaM'
  }
};

  const reponse = await fetch(url, options)
  const data = await reponse.json()

  console.log(data)

  setFilmes(data.results)
    }

    buscarFilmes()


  },[])



  return (
    <View style={style.container}>
      <Header></Header>
      <Search></Search>
      <BannerFilmes></BannerFilmes>

      <View style={{width:'90%'}}>
        <FlatList
          data = {filmes}

          horizontal = {true}

          keyExtractor={(item) => item.id}

          renderItem= {({item}) => (
            
             <CardMovies titulo = {item.title}  nota = {item.vote_average}  img = {item.poster_path} desc={item.overview}></CardMovies>
          
                
          
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
