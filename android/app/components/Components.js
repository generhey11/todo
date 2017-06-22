import React , {Component} from 'react';

import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class ViewContainer extends Component{
  render(){
    return(

        <View style ={styles.container}>
          <Text style ={styles.header}>TODOs</Text>
        </View>
      );
  }
};

const styles =  StyleSheet.create({
    container:{
      marginTop:50,
      marginRight:30,
      marginLeft:30,
      alignItems:'center',
      backgroundColor:'red',
      padding:10,
      borderBottomWidth:2,
      
    },

    header:{
      fontSize:30,
      fontWeight:'bold',
    }
});


AppRegistry.registerComponent('ViewContainer', ()=> ViewContainer);