import React from 'react'
import {View,ScrollView} from 'react-native'
import Cards from '../components/Cards'
import requests from '../utils/endpoints'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

const Home = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'rgb(0,0,0)', flex: 1 }}>
            
                <Navbar navigation={navigation}/>
                <Banner fetchUrl={requests.fetchComedyMovies} navigation={navigation} />
                <ScrollView style={{ flex: 1}}>
                <Cards fetchUrl={requests.fetchTrending} heading={"Trending Now"} navigation={navigation} />
                {/* <Cards fetchUrl={requests.fetchNetflixOriginals} heading={"Netflix Originals"} navigation={navigation}/> */}
                <Cards fetchUrl={requests.fetchActionMovies} heading={"Action Movies"} navigation={navigation} />
                {/* <Cards fetchUrl={requests.fetchComedyMovies} heading={"Comedy Movies"} navigation={navigation}/> */}
                <Cards fetchUrl={requests.fetchDocumentaries} heading={"Documentaries"} navigation={navigation}/>
                <Cards fetchUrl={requests.fetchHorrorMovies} heading={"Horror Movies"} navigation={navigation}/>
                {/* <View style={{ paddingBottom: 10, marginBottom: 20 }}></View> */}
            </ScrollView>
        </View>
  )
}

export default Home
