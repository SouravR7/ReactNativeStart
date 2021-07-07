import React,{useState} from 'react';
import {View,Text, StyleSheet,TextInput, Button} from 'react-native';

const Login=(props)=>{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleButton =()=>{
        alert(name , password)
    }
    return(
        <View>
            <Text style={styles.font}>{props.data}</Text>
            <TextInput  style={[styles.input, styles.font]}
            onChangeText={(e)=> setName(e)}
            value={name}
            placeholder="Name"
            //keyboardType="numeric"
            />
            <TextInput  style={[styles.input, styles.font]}
            onChangeText={(e)=> setPassword(e)}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            //keyboardType="numeric"
            />
            <Button onPress={handleButton} style={styles.button} title="Login"/>
        </View>
    )
}

const styles = StyleSheet.create({
   font:{
       fontSize:20,
       color:"green",
   },
   input:{
    height: 50,
    margin: 12,
    borderWidth: 1,
   },
  });

export default Login;