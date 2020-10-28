import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Alert, View, Text, Button, TouchableOpacity} from 'react-native';
import CountDown from 'react-native-countdown-component';

class App extends React.Component {
  
	constructor(props) 
	{
		super(props)
		this.state = {
			timeLeft: 25,
			timerOn: false,
		};

	}

	changeTimerStatus = () => {
		this.setState({timerOn: this.state.timerOn ? false : true});
	}

	componentDidMount(){
	}


	render(){
		return (
		<>
			<SafeAreaView style={styles.MainView}>

				<View style={styles.timeArea}>
					<Text style={styles.time}>{this.state.timeLeft}</Text>
					<CountDown
						until={this.state.timeLeft}
						onFinish={() => Alert.alert('finished')}
						onPress={() => Alert.alert('hello')}
						timeToShow={['M', 'S']}
						size={20}
						running={this.state.timerOn}
					/>
				</View>

				<View style={styles.buttonsArea}>

					<TouchableOpacity
						style={styles.actionButton}
						onPress={this.changeTimerStatus}
					>
						<Text style={{color: '#FFF'}}>INICIAR</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.actionButton}
						onPress={this.changeTimerStatus}
					>
						<Text style={{color: '#FFF'}}>PARAR</Text>
					</TouchableOpacity>

				</View>

			</SafeAreaView>
		</>
		);
	}
};

const styles = StyleSheet.create({
	MainView: {
		flex: 1,
		backgroundColor: '#ECECEC',
	},
	timeArea: {
		flex: 1,
		justifyContent: 'center',
	},
	time: {
		fontSize: 100,
		textAlign: 'center',
	},
	buttonsArea: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	actionButton: {
		width: 120,
		height: 40,
		alignItems: 'center',
		backgroundColor: '#3498db',
		marginRight: 5,
		color: '#FFF',
		padding: 10,
	}
});

export default App;
