import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from '../assets/fullLogo.png';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email === 'user@mail.com' && password === 'Password') {
      navigation.replace('Home'); 
    } else {
      alert('Authentication failed. Invalid email or password.');
    }
  };

  return (
    
       
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      
    <Image source={{uri:'http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg'}} style={styles.backgroungImage}/>
      <View style={styles.form}>
      {/* <Image source={logo} style={styles.logo} resizeMode="contain" /> */}
      <Text style={{marginBottom: 20,fontSize:28,color:'white',fontWeight:'bold',textAlign:'left'}}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          New to Netflix? <Text style={styles.signupLink}>Sign up now</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    backgroungImage:{
        position:'absolute',
        width:'100%',
        height:'100%',
        zIndex:1,
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  logo: {
    width: 150,
    height: 50,
    zIndex:2,
    position:'absolute',
    margin:0,
    top:15,
    left:10
  },
  form: {
    width: '80%',
    height:300,
    backgroundColor: 'rgba(0,0,0,1)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:2,
    borderRadius:10
  },
  input: {
    height: 40,
    width:250,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius:6,
    backgroundColor:'#fff'
  },
  button: {
    backgroundColor: '#e50914',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width:250,
    height:50
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupText: {
    marginTop: 15,
    textAlign: 'center',
    color:'#fff',
    marginLeft:0,
    marginRight:0
  },
  signupLink: {
    color: '#e50914',
    fontWeight: 'bold',
  },
});

export default SignInScreen;
