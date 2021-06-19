/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 //import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Login from "./component/Login"
 
 
 const App= () => {
   const [click,setClick] = React.useState("Hello Native")
   const[open, setOpen] = React.useState(false)
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const handleClick=()=>{
     setClick("Native Click");
     setOpen(!open)
     
   }
 
   return (
  
         <View>
         <Text style={styles.display}>{click}</Text>
         <Button title="Click Here" onPress={()=>handleClick()} />
        {open && <Login data ="This is Login Screen"/>}
         </View>
        
   );
 };
 
 const styles = StyleSheet.create({
   display:{
     display:"flex",
     justifyContent: "center",
     color:"red",
     backgroundColor:"yellow",
     fontSize:20
   }
 });
 
 export default App;
