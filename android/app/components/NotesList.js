import React, {Component} from 'react';

import{
	AppRegistry,
	View,
	Text,
	StyleSheet,
	FlatList,
	ScrollView,
} from 'react-native';

export default class NotesList extends Component{
	render(){
		return(

			<View style = {styles.notesBody}>
				<FlatList
					data = {[

						{key:'sampleData1'},
						{key:'sampleData2'},
						{key:'sampleData3'},
						{key:'sampleData4'},
						{key:'sampleData5'},
						
						]}

						renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}

					 />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	notesBody:{
		marginTop:10,
		alignItems:'center',
	},

	item:{
		fontSize:20,
		padding:5,
	}
});

AppRegistry.registerComponent('NoteList' ,()=> NoteList);