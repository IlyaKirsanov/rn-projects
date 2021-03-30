import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CategoryGrid from '../components/CategoryGrid'
import HeaderButton from '../components/HeaderButton'

const CategoriesScreen = props => {

	const renderGridItem = (itemData) => {
		return (
			<CategoryGrid
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals',
						params: {
							categoryId: itemData.item.id,
						}
					})
				}} />

		)
	}

	return (
		<FlatList
			keyExtractor={(item, index) => item.id}
			numColumns={2}
			data={CATEGORIES}
			renderItem={renderGridItem}
		/>
	)
}

CategoriesScreen.navigationOptions = (navData) => {

	return {
		headerTitle: 'Meal Categories',
		headerLeft:
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item title="Menu" iconName='ios-menu' onPress={() => navData.navigation.openDrawer()} />
			</HeaderButtons>

	}

}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

})

export default CategoriesScreen;