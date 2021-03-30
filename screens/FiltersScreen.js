import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CategoryGrid from '../components/CategoryGrid'
import HeaderButton from '../components/HeaderButton'

const FiltersScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>The FiltersScreen screen</Text>
		</View>
	)
}


FiltersScreen.navigationOptions = (navData) => {

	return {
		headerTitle: 'Filter Meals',
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
	}
})

export default FiltersScreen;