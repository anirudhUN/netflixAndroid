import React,{useState,useEffect} from 'react'
import {View,Text, Image, StyleSheet, TouchableOpacity,ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import queryString from 'query-string';
import movieTrailer from 'movie-trailer';
import logo from '../assets/logo.png'
import Cards from '../components/Cards';
import requests from '../utils/endpoints';


const MovieInfo = ({navigation,route}) => {

    const id = route.params.id;

    const [movie,setMovie]=useState([]);
    const [playing, setPlaying] = useState(true);
    const [playerUrl, setPlayerUrl] = useState('');
    const [actualUrl,setActualUrl]=useState('')

    useEffect(() => {
        const getData = () => {
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=243e4c829c03af820debe020b717349b`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .catch((error) => console.log('Error fetching data:', error));
        };
        getData();
      }, [id]);
      console.log(movie)

      useEffect(()=>{
        if (movie) {
          const movieName = movie?.title || movie?.name  || movie?.original_name;
          movieTrailer(movieName || '')
            .then((url) => {
              console.log('Trailer URL:', url);
              setActualUrl(url)
              const parsedUrl = queryString.parseUrl(url); 
              const query = parsedUrl.query;
              setPlayerUrl(query.v);
            })
            .catch((error) => console.log(error));
        }
      },[movie])
      

      const handlePlayClick = () => {
        navigation.navigate('MoviePlayer',{movie: movie})
      };

      console.log("Player url",playerUrl)

  return (

      <View style={styles.bannerContainer}>
        <ScrollView>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{zIndex:2,position:'absolute',margin:10}}>
          <Image source={logo} style={{width:50,height:50,}}/>
          </TouchableOpacity>
          
        <Image source={{ uri: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` }} style={styles.bannerImage}/>
        <LinearGradient
    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
    style={styles.gradientContainer}
  />
        {movie?.title || movie?.name || movie?.original_name ?(
          <View>
        <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>{movie?.title || movie?.name || movie?.original_name}</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color:'white'}}>{movie?.genres[0]?.name} </Text>
                <Text style={{color:'white'}}>| {movie?.genres[1]?.name} </Text>
                <Text style={{color:'white'}}>| {movie?.genres[2]?.name}</Text>
            </View>
            <TouchableOpacity onPress={handlePlayClick}  >
            <View style={styles.bannerButtons}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Watch Now</Text>
            </View>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View>
          <View style={styles.description}>
            <Text style={styles.descriptionOverview}>{movie?.overview}</Text>
          </View>
          <View >
          <Cards fetchUrl={requests.fetchComedyMovies} heading={"You May Also Like"} navigation={navigation}/>
          </View>
          </View>
          </ScrollView>
          </View>
          ) : null}
          
          <View>

          </View>
          </ScrollView>
          </View>
   
  )
}

const styles=StyleSheet.create({
    bannerContainer:{
        flex:1,
        backgroundColor:'rgb(0,0,0)'
    },
    bannerImage:{
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        height:450
    },
    bannerContent:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        height:450,
        
        width:'100%'
    },
    bannerTitle:{
        fontSize:35,
        color: 'white',
        fontWeight:'bold',
        textAlign:'center',
    },
    description:{
        display:'flex',
        paddingTop:2,
        margin:10,
    },
    descriptionHeading:{
        fontSize:16,
        fontWeight:'bold',
        color:'rgba(255,255,255,1)', 
    },
    descriptionOverview:{
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'justify',
        color:'rgba(255,255,255,1)'
    },
    gradientContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 450,
      },
      bannerButtons: {
        marginTop: 10,
            backgroundColor: '#E50914',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            // paddingHorizontal: 12,
            width:390,
            borderRadius: 5,
            elevation: 3,
        
      },
})

export default MovieInfo
