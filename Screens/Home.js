import React from "react";
import { TouchableOpacity,ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../styles"
import { useFonts, Inter_900Black,DMSans_400Regular } from '@expo-google-fonts/dm-sans';
// const image = { uri: "https://reactjs.org/logo-og.png" };


export default function Home({navigation}){
    let [fontsLoaded] = useFonts({
        DMSans_400Regular,
      });
      if (!fontsLoaded) {
        // return <AppLoading />;
        return <Text >Loading</Text>;
      }
    
      return (
        <View style={styles.container}>
        <ImageBackground source={require("../assets/Main-Image.jpg")} style={styles.image}>
        
        </ImageBackground>
        <View style={styles.textcontainer}>
            <Text style={styles.heading}>Check our your comfotable home !</Text>
            <Text style={styles.subheading}>Enjoy the comfort of affordable and cosy rentals with the peace of mind of booking with the app</Text>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Listings")}>
                <Text style={{color:colors.white,fontSize:18,}}>
                Get Started
                </Text>
                
    
            </TouchableOpacity>
        </View>
      </View>

      );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1.25,
    resizeMode: "cover",
    justifyContent: "center",
    height:"100%"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  textcontainer: {
      backgroundColor:"#fff",
      display:"flex",
      flex:0.75,
    //   justifyContent:"center",
      alignItems:"center",
      height:"50%",
      borderRadius:30,
      paddingTop:80,
      paddingHorizontal:50,
      marginTop:-30
    },
  heading:{
    color:colors.text,
    fontSize:38,
    marginBottom:20,
    // letterSpacing:1,
    textAlign:"center",
    fontFamily: 'DMSans_400Regular'
  },
  subheading:{
      fontSize:18,
      color:"#959596",
      textAlign:"center",
      fontFamily: 'DMSans_400Regular',
      marginBottom:25,
  },
  button:{
      backgroundColor:colors.primaryColor,
      paddingHorizontal:50,
      paddingVertical:15,
      borderRadius:15,
      
      color:"#fff",
      fontFamily: 'DMSans_400Regular',
  }


});



   
