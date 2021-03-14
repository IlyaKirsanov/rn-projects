import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, FlatList, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import _ from 'lodash';
import BodyText from '../components/BodyText';
import * as ScreenOreintation from 'expo-screen-orientation'


const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const random = Math.floor(Math.random() * (max - min)) + min;
	if (random === exclude) {
		return generateRandomBetween(min, max, exclude)
	} else {
		return random;
	}
}

const renderListItem = (listLength, itemData) => {
	return (
		<View style={styles.listItem}>
			<BodyText>#{listLength - itemData.index}</BodyText>
			<BodyText>{itemData.item}</BodyText>
		</View>
	)
}


const GameScreen = props => {

	// ScreenOreintation.lockAsync(ScreenOreintation.OrientationLock.PORTRAIT)

	const initialGuess = generateRandomBetween(1, 100, props.userChoice)
	const [currentGuess, setCurrentGuess] = useState(initialGuess)
	const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()])
	const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width)
	const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height)

	const currentLow = useRef(1)
	const currentHight = useRef(100)

	const { userChoice, onGameOver } = props

	useEffect(() => {
		const updatedLayout = () => {
			setAvailableDeviceWidth(Dimensions.get('window').width)
			setAvailableDeviceHeight(Dimensions.get('window').height)
		}

		Dimensions.addEventListener('change', updatedLayout)
		return () => {

			Dimensions.removeEventListener('change', updatedLayout)
		}
	})

	useEffect(() => {
		if (currentGuess === props.userChoice) {
			props.onGameOver(pastGuesses.length);
		}
	}, [currentGuess, userChoice, onGameOver])

	const nextGuesHandler = direction => {
		if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
			Alert.alert('Don\`t lie!', 'You know that this is wrong...', [
				{ text: 'Sorry', style: 'cancel' }
			])
			return;
		}
		if (direction === 'lower') {
			currentHight.current = currentGuess
		} else {
			currentLow.current = currentGuess + 1
		}

		const nextNumber = generateRandomBetween(currentLow.current, currentHight.current, currentGuess)
		setCurrentGuess(nextNumber);
		setPastGuesses((curPastGuesses) => [nextNumber.toString(), ...curPastGuesses])
	}

	let listContainerStyles = styles.listContainer

	if (Dimensions.get('window').width > 500) {
		listContainerStyles = styles.listContainerStyles
	} else {
		listContainerStyles = styles.listContainerStyles
	}

	if (Dimensions.get('window').height < 500) {
		return (
			<View style={styles.screen}>
				<Text>Opponent`s Guess</Text>
				<View style={styles.controls}>
					<MainButton onPress={nextGuesHandler.bind(this, 'lower')} >
						<Ionicons name="md-remove" size={24} color="white" />
					</MainButton>
					<NumberContainer>{currentGuess}</NumberContainer>
					<MainButton onPress={nextGuesHandler.bind(this, 'greater')} >
						<Ionicons name="md-add" size={24} color="white" />
					</MainButton>
				</View>
				<View style={listContainerStyles}>
					{/* <ScrollView contentContainerStyle={styles.list}>
					{_.map(pastGuesses, (guess, index) => renderListItem(guess, pastGuesses.length - index))}
				</ScrollView> */}
					<FlatList
						keyExtractor={item => item}
						data={pastGuesses}
						renderItem={renderListItem.bind(this, pastGuesses.length)}
						contentContainerStyle={styles.list}
					/>
				</View>

			</View>
		)
	}


	return (
		<View style={styles.screen}>
			<Text>Opponent`s Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={Dimensions.get('window').height > 300 ? styles.btnContainer : styles.btnContainerSmall}>
				<MainButton onPress={nextGuesHandler.bind(this, 'lower')} >
					<Ionicons name="md-remove" size={24} color="white" />
				</MainButton>
				<MainButton onPress={nextGuesHandler.bind(this, 'greater')} >
					<Ionicons name="md-add" size={24} color="white" />
				</MainButton>
			</Card>
			<View style={listContainerStyles}>
				{/* <ScrollView contentContainerStyle={styles.list}>
					{_.map(pastGuesses, (guess, index) => renderListItem(guess, pastGuesses.length - index))}
				</ScrollView> */}
				<FlatList
					keyExtractor={item => item}
					data={pastGuesses}
					renderItem={renderListItem.bind(this, pastGuesses.length)}
					contentContainerStyle={styles.list}
				/>
			</View>

		</View>
	)
}


export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
		width: 350,
		maxWidth: '90%'
	},
	controls: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '80%',
		alignItems: 'center'
	},
	btnContainerSmall: {

	},
	listContainer: {
		flex: 1,
		width: Dimensions.get('window').width > 350 ? '60%' : '80%',
		maxWidth: 400
	},
	list: {
		flexGrow: 1,
		// alignItems: 'center',
		justifyContent: 'flex-end'
	},
	listItem: {
		flexDirection: 'row',
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 15,
		marginVertical: 10,
		backgroundColor: 'white',
		justifyContent: 'space-around',
		width: '100%'
	}
})

