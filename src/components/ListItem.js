import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardSection from '/.common';

class ListItem extends Component {
	 render() {

	 	const { textStyle } = styles;

	 	return(
	 		<CardSection>
	 			<Text>
	 				{this.props.library.title}
	 			</Text>	
	 		</CardSection>
	 	);
	 }
}

const styles = {
	textStyle: {
		paddingLeft: 18,
		fontSize: 15
	}
}

export default ListItem;	