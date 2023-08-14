import React from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import logo from '../assets/logo.png'
import Recommended from '../components/Recommended'

const MyList = ({navigation}) => {
  return (
    <View style={{backgroundColor:'rgba(0,0,0,1)',flex:1}}>
        <View style={styles.navbar}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Image source={logo} style={{width:50,height:50,}}/>
          </TouchableOpacity>
        <Text  style={styles.navItems}>My List</Text>
      </View>
      <View style={{flex:1,alignItems:'center'}}>
      <Recommended navigation={navigation}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      alignItems: 'center',
      padding:3,
      marginBottom:7
    },
    navItems: {
      margin: 10,
      fontSize: 15,
      fontWeight:'bold',
      color:'rgba(255,255,255,1)',
      textTransform:'uppercase'
    }
})


export default MyList
