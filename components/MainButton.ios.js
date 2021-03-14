import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Colors from '../constants/colors'

const MainButton = props => {

	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
				<View style={styles.button}>
					<Text style={styles.buttonText}>{props.children}</Text>
				</View>
			</TouchableOpacity>
		</View>

	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 25,
		overflow: 'hidden'
	},
	button: {
		backgroundColor: Colors.primary,
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 24,
	},
	buttonText: {
		color: 'white',
		fontFamily: 'proxima-nova',
		fontSize: 18
	}
})

export default MainButton