import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'

const CategoryGrid = props => {

	const TouchableCmp = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity

	return (
		<View style={styles.gridItem}>
			<TouchableCmp
				style={{ flex: 1 }}
				onPress={props.onSelect}
			>
				<View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
					<Text style={styles.title} numberOfLines={2}>{props.title}</Text>
				</View>
			</TouchableCmp>
		</View>

	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: .25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 4,
		padding: 15,
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 10,
		overflow: 'hidden',
	},
	title: {
		fontFamily: 'proxima-nova-bold',
		fontSize: 18,
		textAlign: 'right'
	}
})

export default CategoryGrid