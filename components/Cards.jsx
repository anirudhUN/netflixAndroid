import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const Cards = ({ fetchUrl, heading, navigation }) => {

  const [movies, setMovies] = useState();

  const handleClick = () => {
    navigation.navigate('TV');
  };

  useEffect(() => {
    const getData = () => {
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => setMovies(data.results.slice(2,6)))
        .catch((error) => console.log('Error fetching data:', error));
    };
    getData();
  }, [fetchUrl]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  const renderMovieCard = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.card_container}
      onPress={() => navigation.navigate('MovieInfo', { id: item.id })}
    >
      <Image
        style={styles.card}
        source={{ uri: `${base_url}${item.poster_path}` }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.heading_container}>
      <Text style={styles.card_heading}>{heading}</Text>
      <Text style={styles.seeAll} onPress={()=>navigation.navigate('ViewAll',{fetchUrl:fetchUrl,heading:heading})}>VIEW ALL {">"} </Text>
      </View>
      <FlatList
        horizontal={true}
        data={movies}
        renderItem={renderMovieCard}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading_container:{
    display:'flex',flexDirection:'row',
    justifyContent: 'space-between',
  },
  seeAll:{
    paddingTop:7,
    paddingRight:5,
    // color:'#E10F0C',
    color:'rgba(240,240,240,0.6)',
    // fontWeight:'bold',
    fontSize:11
  },
  container: {
    marginLeft: 5,
    marginRight:5,
    paddingTop:19
  },
  card_container: {
    flexDirection: 'row',
  },
  card: {
    height: 220,
    width: 150,
    margin: 3,
    borderRadius: 8,
    // borderWidth:0.39,
    // borderColor:'rgba(255,255,255,1)'
  },
  card_heading: {
    fontSize: 15,
    textTransform:'uppercase',
    color: 'rgb(255,255,255)',
    fontWeight: 'bold',
    marginBottom: 3,
    fontFamily:"'Netflix Sans','Helvetica Neue','Roboto'"
  },
});

export default Cards;
