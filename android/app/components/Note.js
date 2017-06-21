import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Generhey extends Component {

  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>

        <Text style={styles.noteText}>{this.props.val.note}</Text> 

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}> 
          <Text style = {styles.blank} editable={true}>-</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  note:{
    flexDirection:'row',
    position:'relative',
    borderBottomWidth:2,
    borderBottomColor:'#9B9A9B',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
  },

  noteText:{
    color:'#C5000D',
    paddingRight:35,
    fontSize:30,
    fontWeight:'bold',
  },

  blank:{
    alignItems:'center',
    fontSize:50,
  },

  noteDelete:{
    alignSelf:'flex-start',
    left:250,
    position:'absolute',
  },


});

