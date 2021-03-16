import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const CategoriesScreen = props => {

	return (
		<View style={styles.screen}>
			<Text>The CategoriesScreen screen</Text>
			<Button title="Go to meals" onPress={() => {
				props.navigation.navigate({ routeName: 'CategoryMeals' })
			}} />
			<Button title="Go back with replace" onPress={() => {
				props.navigation.replace()
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

export default CategoriesScreen;