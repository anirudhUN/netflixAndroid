import React,{useState,useEffect} from 'react'
import YoutubePlayer from "react-native-youtube-iframe";
import movieTrailer from 'movie-trailer';
import { View, Dimensions,Text, StyleSheet,Image,ActivityIndicator, TouchableOpacity } from 'react-native'
import queryString from 'query-string';
import Icon from 'react-native-vector-icons/AntDesign';
import Recommended from './Recommended';

const MoviePlayer = ({ navigation,route }) => {

    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
    
  

// const playerUrl=route.params.url
const movie=route.params.movie
const [playing, setPlaying] = useState(true);
const [playerUrl, setPlayerUrl] = useState('');
const [movieDetails, setMovieDetails] = useState(null);
const [loading, setLoading] = useState(true);
const [like,setLike]=useState('like2')
const [dislike,setDisLike]=useState('dislike2')

const getData = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=243e4c829c03af820debe020b717349b`)}

useEffect(()=>{
    if (movie) {
      const movieName = movie?.title || movie?.name  || movie?.original_name;
      movieTrailer(movieName || '')
        .then((url) => {
          // const parsedUrl = new URL(url);
        //   console.log('Trailer URL:', url);
        //   setActualUrl(url)
          const parsedUrl = queryString.parseUrl(url); // Parse query parameters
          const query = parsedUrl.query;
          setPlayerUrl(query.v);
        })
        .catch((error) => console.log(error));

        fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=243e4c829c03af820debe020b717349b`)
        .then((response) => response.json())
        .then((data) => {
            setMovieDetails(data);
            setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  },[movie])
console.log(movie)
console.log("playerurl in player",playerUrl)

if (loading) {
    return <ActivityIndicator />;
}

const handleLike=()=>{
    if(like==='like1'){
        setLike('like2')
    }
    else{
        setLike('like1');
    setDisLike('dislike2')
    }
    
}
const handledislike=()=>{
    if(dislike==='dislike1'){
        setDisLike('dislike2')
    }
    else{
        setDisLike('dislike1')
    setLike('like2')
    }
    
}



    return (
        <View style={{ flex:1, backgroundColor:'black'}}>
            <View>
      <YoutubePlayer
        apiKey="AIzaSyDDBmX-T7__7UnVz29ErvSajkYknlW_t5A"
        height={300}
        // width={SCREEN_HEIGHT}
        backgroundColor='black'
        play={playing}
        videoId={playerUrl}
       
        webViewProps={{
            injectedJavaScript: `
              var element = document.getElementsByClassName('container')[0];
              element.style.position = 'unset';
              element.style.paddingBottom = 'unset';
              true;
            `,
          }}
       
      />
            {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
            
            </View>
            {movie && (
            <View style={styles.details}>
            <Text style={{color:'rgba(255,255,255,0.8)'}}>Now Watching</Text>
            <Text style={styles.title}>{movieDetails?.name || movieDetails?.title || movieDetails?.original_name}</Text>
            {/* {movieDetails.genres && ( */}
            <Text style={{color:'rgba(255,255,255,0.8)'}}>{movieDetails.genres[0]?.name} | {movieDetails.genres[1]?.name} | {movieDetails.genres[2]?.name}</Text>
            {/* )} */}
            
            </View>
            )}
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <View style={styles.iconsContainer}>
                <View style={{display:'flex',justifyContent:'center',marginLeft:15}}>
                    <TouchableOpacity onPress={handleLike}>
        <Icon name={like} size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.iconText}>Like</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',alignItems:'center',marginLeft:35}}>
            <TouchableOpacity onPress={handledislike}>
        <Icon name={dislike} size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.iconText}>Dislike</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',alignItems:'center',marginLeft:35}}>
        <Icon name="download" size={25} color="rgba(255,255,255,0.6)" />
        <Text style={styles.iconText}>Download</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',alignItems:'center',marginLeft:35}}>
        <Icon name="sharealt" size={25} color="rgba(255,255,255,0.6)"  />
        <Text style={styles.iconText}>Share</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',alignItems:'center',marginLeft:35}}>
            <TouchableOpacity onPress={()=>navigation.navigate('MyList')}>
        <Icon name="menuunfold" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.iconText}>My List</Text>
        </View>
      </View>
      <Text style={styles.watchlistTitle}>YOUR WATCHLIST</Text>
      <View style={styles.watchlistContainer}>
        <Recommended navigation={navigation} />
      </View>

      </View>
           
    </View>
    
            )
}

const styles=StyleSheet.create({
    details:{
        margin:5,
        backgroundColor:'rgba(150,150,150,0.35)',
        borderRadius:10,
        paddingTop:5,
        paddingBottom:7,
        paddingLeft:7,
    },
    title:{
        fontSize:40,
        color: 'rgba(255,255,255,1)',
        fontWeight:'bold',
    
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(199, 9, 11)',
        borderRadius: 10,
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#fff',
        marginTop: 2,
      },
      watchlistTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.9)',
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 10,
      },
      watchlistContainer: {
        flex: 1,
      },
      iconText:{
        fontSize:12,
        paddingTop:5,
        color:'#fff'
      },
      

})

            export default MoviePlayer