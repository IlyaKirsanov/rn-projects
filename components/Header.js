import React from 'react'

import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';
import TytleText from './TitleText'


const Header = props => {

	return (
		<View style={{
			...styles.headerBase,
			...Platform.select({
				ios: styles.headerIos,
				android: styles.headerAndroid
			})
		}}>
			<TytleText style={styles.headerTitle}>{props.title}</TytleText>
		</View>
	)

}

const styles = StyleSheet.create({
	headerBase: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerIos: {
		backgroundColor: 'white',
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	},
	headerAndroid: {
		backgroundColor: Colors.primary,
		borderBottomColor: 'transparent',
		borderBottomWidth: 0
	},
	tinyLogo: {
		width: 30,
		height: 30,
	},
	headerTitle: {
		color: Platform.OS === 'ios' ? Colors.primary : 'white',
		fontSize: 20,
		fontFamily: 'proxima-nova-bold'

	}
})

export default Header