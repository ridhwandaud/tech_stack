import React, { Component } from 'react';
import { View, Text ,TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

	renderDescription(){

		const { library, expended } = this.props;

		if(expended){
			return(
				<CardSection>
					<Text>{library.description}</Text>
				</CardSection>
			);
		}
	}

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
			 		{this.renderDescription()}
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

const mapStateToProps = (state, ownProps) =>{

	const expended = state.selectedLibraryId === ownProps.library.id;

	return { expended };
};

export default connect(mapStateToProps, actions)(ListItem);	