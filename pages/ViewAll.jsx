import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import logo from '../assets/logo.png';

const ViewAll = ({ navigation, route }) => {
  const fetchUrl = route.params.fetchUrl;
  const heading = route.params.heading;
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results.slice(0, 10)))
      .catch((error) => console.log('Error fetching data:', error));
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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={logo} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
        <Text style={styles.card_heading}>{heading}</Text>
      </View>

      <FlatList
        data={movies}
        renderItem={renderMovieCard}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer} // Add content container style
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading_container: {
    // Remove position: 'absolute'
    zIndex: 1,
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,1)',
    padding: 10,
    borderRadius:10
  },
  container: {
    paddingTop: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    flex: 1,
  },
  card_container: {},
  card: {
    height: 230,
    width: 160,
    margin: 15,
    borderRadius: 8,
    borderWidth:1,
    borderColor:'white'
  },
  card_heading: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: 'rgb(255,255,255)',
    fontWeight: 'bold',
    margin: 5,
    fontFamily: "'Netflix Sans','Helvetica Neue','Roboto'",
  },
  contentContainer: {
    // paddingHorizontal: 10, // Add horizontal padding to the content
    alignItems:'center'
  },
});

export default ViewAll;
