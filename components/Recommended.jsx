import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,Image, FlatList,TouchableOpacity, ActivityIndicator} from 'react-native'
import requests from '../utils/endpoints';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <View style={{flex:1}}>
        {/* <Text style={{color:'rgba(255,255,255,0.9)',fontSize:15,fontWeight:'bold',marginTop:10,marginLeft:10,marginBottom:5}}>YOUR WATCHLIST</Text> */}
        <FlatList
        data={movieDetails}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}/>
      </View>
  )
}

const styles=StyleSheet.create({
    recommendedCards:{
        display:'flex',
        flexDirection:'row',
        margin:5,
        width:375,
        backgroundColor:'rgba(151,151,151,0.3)',
        padding:1,
        borderRadius:10,
        borderWidth:1,
        borderColor:'gray',
        elevation:50
      },
      card: {
        height: 120,
        width: 90,
        margin: 3,
        borderRadius: 6
      },
      recommendedTitle:{
        fontSize:19, 
        color:'rgba(255,255,255,0.9)',
        fontWeight:'bold',
        paddingRight: 10,
        width:285
      },
      ratingContainer:{
        top:10
      },
      rating:{
        display:'flex',
        flexDirection:'row'
      },
      content:{
        marginLeft:5,
        padding:2.5
      }
})

export default Recommended
