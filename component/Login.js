import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const Login=(props)=>{
    return(
        <View>
            <Text style={styles.font}>{props.data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   font:{
       fontSize:30,
       color:"green",
   }
  });

export default Login;