import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const MealDetailScreens = props => {
	return (
		<View style={styles.screen}>
			<Text>The MealDetailScreens screen</Text>
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

export default MealDetailScreens;