import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react';
import {Pressable,Text, Dimensions,View,ActivityIndicator,FlatList, TouchableOpacity,Image,StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const Banner=({ fetchUrl ,navigation})=> {

    const [movies, setMovies] = useState();

    useEffect(() => {
        const getData = () => {
          fetch(fetchUrl)
            .then((response) => response.json())
            .then((data) => setMovies(data.results.slice(0,5)))
            .catch((error) => console.log('Error fetching data:', error));
        };
        getData();
      }, [fetchUrl]);


      const handleClick=(id)=>{
        
      }

      
      if(!movies){
        return <ActivityIndicator />;
      }
      const renderMovieCard = ({ item }) => (
        <View
          key={item.id}
          style={styles.card_container}
        >
             <View style={styles.card}>
      <Image
         style={styles.cardImage}// Add a specific style for the image
        source={{ uri: `${base_url}${item.backdrop_path}` }}
      />

      <LinearGradient
    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.95)']}
    style={styles.gradientContainer}
  />
      <View style={styles.bannerContent}>
      <Text style={styles.bannerTitle}>{item.title}</Text>
      
                <View style={styles.bannerButtons}>
                <TouchableOpacity style={styles.playButton}  onPress={() => navigation.navigate('MoviePlayer', { movie: item})}>
                  <Text style={styles.playButtonText}>PLAY</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.moreButton} onPress={() => navigation.navigate('MovieInfo', { id: item.id })}>
                  <Text style={styles.moreButtonText}>MORE</Text>
                  </TouchableOpacity>
                </View>
      
      </View>
      </View>
        </View>
      );

      const base_url = "https://image.tmdb.org/t/p/original/";


  

  return (
    <View style={styles.container}>
      {/* <View style={styles.heading_container}>
      <Text style={styles.card_heading}>{heading}</Text>
      <Text style={styles.seeAll}>View All</Text>
      </View> */}
      <FlatList
        horizontal={true}
        data={movies}
        renderItem={renderMovieCard}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        // pagingEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    heading_container:{
      display:'flex',flexDirection:'row',
      justifyContent: 'space-between',
    },
    seeAll:{
      paddingTop:5,
      color:'#E50914'
    },
    container: {
      marginLeft: 5,
      marginRight:5,
      paddingTop:10
    },
    card_container: {
      flexDirection: 'row',
    },
    card: {
      height: 250,
      width: 400,
      margin: 2,
      borderRadius: 10,
    },
    card_heading: {
      fontSize: 18,
      color: 'rgb(255,255,255)',
      fontWeight: 'bold',
      marginBottom: 3,
      fontFamily:"'Netflix Sans','Helvetica Neue','Roboto'"
    },
    cardImage:{
        height: 250,
    width: 400,
    borderRadius: 10,
    position:'absolute',
   zIndex:2
    },
    gradientContainer:{
        ...StyleSheet.absoluteFillObject,
    zIndex: 3,
    },
    bannerContent:{
      height: 250,
      width: 400,
      display:'flex',
        marginLeft:5,
        zIndex:3,
        justifyContent:'flex-end',
        padding:5
    },
    bannerTitle:{
        
        fontSize:26,
        color:'white',
        marginBottom:3,
        fontWeight:'bold',
       
    },
    bannerButtons:{
      
            display:'flex',
            flexDirection:'row',
            
    },
    playButtonText:{
      color:'rgba(255,255,255,1)',
      fontWeight:'bold'
    },
    moreButtonText:{
      color:'rgba(0,0,0,1)',
      fontWeight:'bold'
    },
    playButton:{
      backgroundColor: '#E50914',
      paddingVertical: 5,
            paddingHorizontal: 12,
            borderRadius: 5,
            alignItems:'center',
            width:100,
    },
    moreButton:{
      backgroundColor: '#ffff',
      paddingVertical: 5,
            paddingHorizontal: 12,
            borderRadius: 5,
            alignItems:'center',
            width:100,
            marginLeft:5
    }
  });

export default Banner;