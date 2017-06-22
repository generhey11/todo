
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


import Note from './android/app/components/Note';

import Components from './android/app/components/Components';

import NotesList from './android/app/components/NotesList';

export default class Generhey extends Component {


  render(){
    return(

      <View style = {styles.mainFrame}>
        <Components />

        <NotesList />
      </View>

    );
  }

}

const styles  = StyleSheet.create({
  mainFrame:{
    backgroundColor:'blue',
    height:100,
  }
});

AppRegistry.registerComponent('Generhey', () => Generhey);
