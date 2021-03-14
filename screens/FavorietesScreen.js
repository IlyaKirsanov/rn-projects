import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const FavorietesScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>The FavorietesScreen screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default FavorietesScreen;