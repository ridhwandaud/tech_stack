import React, { Component } from 'react';
import { View, Text ,TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	 render() {
	 	const { textStyle } = styles;
	 	const { id, title } = this.props.library;

	 	return(
	 		<TouchableWithoutFeedback 
	 			onPress={ () => this.props.selectLibrary(id)}
	 		>
	 			<View>
			 		<CardSection>
			 			<Text style={textStyle}>
			 				{title}
			 			</Text>	
			 		</CardSection>
		 		</View>
	 		</TouchableWithoutFeedback>
	 	);
	 }
}

const styles = {
	textStyle: {
		paddingLeft: 18,
		fontSize: 15
	}
};

export default connect(null, actions)(ListItem);	