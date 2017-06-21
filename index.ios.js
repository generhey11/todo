
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { RadioGroup,  RadioButton} from 'react-native-flexi-radio-button';

import Note from './android/app/components/Note';

export default class Generhey extends Component {

  state = {
    noteArray:[],
    noteText:'',
  }

  render() {

    let notes = this.state.noteArray.map((val,key)=>{
      return <Note key = {key} keyval ={key} val={val} deleteMethod ={() => this.deleteMethod(key)} />


    });

    return (
      <View style={styles.container}>

        <View style={styles.header}>

          <Text style={styles.headerText}>TODOs</Text>

        </View>

        <ScrollView style={styles.scrollContainer}>
            {notes}
        </ScrollView>

        <View style={styles.footer}>

          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
           <Text style={styles.addText}>+</Text>
           <Text style={styles.addTextAdd}>add</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput} multiline={true}
            onChangeText={(noteText) => this.setState({noteText})} 
            value ={this.state.noteText} placeholder='Enter new note' placeholderColor='white'>
          </TextInput>        

        </View>
      </View>
    );
  }

  addNote()
  {
    if(this.state.noteText){
      this.state.noteArray.push( {'note' : this.state.noteText} );
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: '' });
    }
  }

  deleteMethod(key){
    this.state.noteArray.splice(key,1);
    this.setState({ noteArray: this.state.noteArray});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ECCECF',
  },
  header: {
    alignItems: 'center',
    justifyContent:'center',
    borderBottomWidth:2,
    borderBottomColor:'#9B9A9B',
    marginRight:20,
    marginLeft:20,
    top:40,
    marginLeft:40,
    marginRight:40,
  },

  headerText:{
    fontSize:30,
    color:'#bfbfbf',
    fontWeight:'bold',
    bottom:10,
  },

  scrollContainer:{
    flex:1,
    marginTop:50,
    marginBottom:50,
    marginRight:40,
    marginLeft:40,
  },

  footer:{
    flexDirection: 'row-reverse',

  },

  addText:{
    fontSize:90,
    color:'#9B9A9B',

  },

  textInput:{
    flex:1,
    color:'#C5000D',
    height:100,
    backgroundColor:'#fff',
    marginLeft:40,
    marginRight:10,
    bottom:0,
    marginBottom:20,
    borderRadius:5,
    borderColor:'#000',
    borderWidth:1,
    fontSize:30,
    padding:10,
    fontWeight:'bold',hhhh
  },

  addButton:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginRight:20,
    bottom:30,
  },

  addTextAdd:{
    fontSize:20,
    bottom:20,
    color:'#9B9A9B',
    fontWeight:'bold',
  },

});

AppRegistry.registerComponent('Generhey', () => Generhey);
hg