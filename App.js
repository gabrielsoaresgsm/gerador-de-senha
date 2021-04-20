import React,{ useState } from 'react';
import {View, Text, StyleSheet,Image, LogBox, TouchableOpacity} from 'react-native';

import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

let charset ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%';

export default function App(){
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(10);

  function generatePass(){

    let pass = '';
    for (let i = 0, n = charset.length; i < size ; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass);

  }

  function copyPass(){
    Clipboard.setString(password)
    alert('Olá, senha copiada com sucesso!')
  }

  return(
    <View style={styles.container}>
      <Image
      source={require('./img/logo.png')}
      style={styles.logo}
      />
      <Text style={styles.title}>Gerador de Senha</Text>
      <Text style={styles.subtitle}>{size} Caracteres</Text>
      
      
      <View style={styles.area}>
        <Slider
          style={{ height:50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#ffa200"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={ (valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text>Gerar senha</Text>
      </TouchableOpacity>


      {password !== '' && ( 
      <View style={styles.area}>
        <Text style={styles.password} onLongPress={copyPass}>{password}</Text>
      </View>
      )}

      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f3f3ff'
  },
  logo:{
    marginBottom: 20
  },
  subtitle:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 7
  },
  button:{
    backgroundColor: '#ffa200',
    width: '80%',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 7,
    marginBottom: 25
  },
  buttonText:{
    fontSize: 20,
    color: '#fff',
    fontWeight:'bold'
  },
  password:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  }

});