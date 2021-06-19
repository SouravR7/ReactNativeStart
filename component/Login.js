import React,{useState} from 'react';
import {View,Text, StyleSheet, TextInput, Button} from 'react-native';

const Login=(props)=>{
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit =()=>{
        if(name !== "" && password !==""){
        alert(`Hi ${name}...`);
        }else{
            alert("Please enter Name and Password")
        }
    }

    return(
        <View>
            <Text style={styles.font}>{props.data}</Text>
           
            <TextInput style={styles.textField} placeholder="Enter Your Name" onChangeText={(e)=>setName(e)} ></TextInput>
            
            <TextInput style={styles.textField} placeholder="Enter Your Name" onChangeText={(e)=>setPassword(e)} secureTextEntry={true} ></TextInput>

            <Button onPress={handleSubmit} title="Submit"/>
        </View>
    )
}

const styles = StyleSheet.create({
   font:{
       fontSize:30,
       color:"green",
       marginTop:10,
   },
   textField:{
    borderColor:"#000000",
    borderWidth:2,
    marginTop:10,
    padding:10
   }
  });

export default Login;