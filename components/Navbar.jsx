import React from 'react';
import {View, StyleSheet,Image,Text} from 'react-native'
import logo from '../assets/logo.png';
import requests from '../utils/endpoints';
import Icon from 'react-native-vector-icons/AntDesign';

const Navbar = ({navigation}) => {
  return (
    <View style={styles.navbar}>
        <Image source={logo} style={{width: 50, height: 50}} />
        <Text style={styles.navItems} onPress={()=>navigation.navigate('ViewAll',{fetchUrl:requests.fetchAll,heading:'Movies'})}>Movies</Text>
        <Text  style={styles.navItems} onPress={()=>navigation.navigate('MyList')}>My List</Text>
        <Icon name="logout" size={25} color='#fff' style={styles.logout} onPress={()=>navigation.replace('SignInScreen')}></Icon>
      </View>
  )
}
const styles = StyleSheet.create({
    navbar: {
    //   backgroundColor: 'rgb(0,0,0)',
    // marginTop:1,
    // marginBottom:10,
    // flex:1,
    //   padding: 5,
    // width:'100%',
      flexDirection: 'row',
      alignItems: 'center',
    //   justifyContent:'center',
    paddingTop:5,
      padding:3,
      
    },
    navItems: {
      margin: 10,
      fontSize: 15,
      color:'white'
    },
    logout:{
        position:'absolute',
        right:18,
        paddingTop:5,
    }
})

export default Navbar
