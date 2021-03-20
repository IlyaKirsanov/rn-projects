import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreens from '../screens/MealDetailScreens';
import Colors from '../constants/Colors'

const MealsNavigator = createStackNavigator({
	Categories: {
		screen: CategoriesScreen,
		navigationOptions: {
			headerTitle: 'Meal Categories',
		}
	},
	CategoryMeals: {
		screen: CategoryMealsScreen,
		navigationOptions: {
		}
	},
	MealDetail: MealDetailScreens

}, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
		},
		headerTinColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
	}
})

export default createAppContainer(MealsNavigator);