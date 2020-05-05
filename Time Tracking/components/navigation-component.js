import React, {Component} from 'react';
import{
    View, 
    Text,
    StyleSheet,
    Button, 
    Image
} from "react-native";

const NavBar = () => {
    return (
        <View style={styles.NavBar}>
                <Button title ="< Back" onPress={()=> alert("Add product")} />
                <Text style={{fontSize:20, fontWeight:"bold"}}>Time Tracking </Text>
            <View style={{flexDirection:'row',justifyContent:"center",alignItems:'center'}}>
                <Text style={{fontSize:15,paddingRight:10}}> Hello, Eric Kha</Text>
                <Image style={{width: 40, height: 40}} source={require('../assets/icon.png')}/>
            </View>
        </View>
    )
}
export default NavBar;


const styles = StyleSheet.create({
    NavBar: {
      justifyContent: "space-between",
      flexDirection:'row',
      width:'100%',
      height: 50,
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 10,
      shadowOpacity: 0.2,
      shadowRadius: 1,
      shadowOffset: {width:0, height:2},
      paddingLeft:10,
      paddingRight:10,
      marginBottom: 5,
      
      
    },
    StartJob:{
        justifyContent: 'space-between',
    }
  });
  