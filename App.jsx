import React,{useState,useEffect} from 'react'
import {View,ScrollView} from 'react-native'
import Cards from './components/Cards'
import requests from './utils/endpoints'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home'
import MovieInfo from './pages/MovieInfo'
import MoviePlayer from './components/MoviePlayer'
import ViewAll from './pages/ViewAll'
import MyList from './pages/MyList'

const App = () => {

  

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator name="Home" initialRouteName={Home} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieInfo" component={MovieInfo} />
        <Stack.Screen name="MoviePlayer" component={MoviePlayer} />
        <Stack.Screen name="ViewAll" component={ViewAll} />
        <Stack.Screen name="MyList" component={MyList} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
