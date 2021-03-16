import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const CategoryMealsScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>The CategoryMealsScreen screen</Text>
			<Button title="To meal details" onPress={() => {
				props.navigation.navigate({
					routeName: 'MealDetail'
				})
			}} />
			<Button title="Go Back" onPress={() => {
				props.navigation.goBack()
			}} />
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

export default CategoryMealsScreen;