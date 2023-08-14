import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,Image, FlatList,TouchableOpacity, Dimensions} from 'react-native'
import requests from '../utils/endpoints';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;

const Recommended = ({navigation}) => {

    const [movie, setMovie] = useState();
    const [movieDetails, setMovieDetails] = useState(null);
    // const [loading, setLoading] = useState(true);


    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        fetch(requests.fetchAll)
        .then((response) => response.json())
        .then((data) => {
            setMovieDetails(data.results);
            setLoading(false);
        })
        .catch((error) => console.log(error));
    },[])
console.log("MovieDetails",movieDetails)
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('MoviePlayer', { movie: item})}>
        <View style={styles.recommendedCards} key={item.id}>
            <Image style={styles.card} source={{ uri: `${base_url}${item?.poster_path}` }} />
            <View style={styles.content}>
            <Text style={styles.recommendedTitle}>{item?.title}</Text>
            <View style={styles.ratingContainer}>
            <Text style={{color:'rgba(255,255,255,0.8)', marginBottom:5}}>Rating:</Text>
            <View style={styles.rating}>
                    <Icon name="star" size={15} color="#FF9529" />
                    <Icon name="star" size={15} color="#FF9529" />
                    <Icon name="star" size={15} color="#FF9529" />
                    <Icon name="star-half-empty" size={15} color="#FF9529" />
                    <Icon name="star-o" size={15} color="#FF9529" />
            </View>
            </View>
            </View>
        </View>
    </TouchableOpacity>
    );

    // if (loading) {
    //     return <ActivityIndicator />;
    // }
  return (
    <View style={styles.container}>
        {/* <Text style={{color:'rgba(255,255,255,0.9)',fontSize:15,fontWeight:'bold',marginTop:10,marginLeft:10,marginBottom:5}}>YOUR WATCHLIST</Text> */}
        <FlatList
        data={movieDetails}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}/>
      </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: windowWidth,
    marginHorizontal: 10, // Add horizontal margin
  },
  recommendedCards: {
    width: windowWidth-20, // Adjust card width to fit within screen width with some margin
    backgroundColor: 'rgba(151, 151, 151, 0.3)',
    padding: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    elevation: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    height: 120,
    width: '25%', // Adjust card width to a percentage of available width
    margin: 2,
    borderRadius: 6,
  },
  recommendedTitle: {
    fontSize: 19,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 'bold',
    // paddingRight: 10,
    width: windowWidth-120, // Adjust title width to take available space within card
  },
  ratingContainer: {
    top: '10%',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginLeft: 3,
    padding: 2.5,
    marginRight:10
  },
})

export default Recommended
