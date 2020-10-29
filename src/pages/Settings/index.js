import 'react-native-gesture-handler';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from '../../stylesheet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Settings extends React.Component {

	//variável do estado, função para handler
	//Usar neste padrão quando for componente/função e não classe
	//const [defaultTime, setDefaultTime] = useState(20);

	constructor(props) 
	{
		super(props)
		this.state = {
			defaultTime: 20,
			timerOn: false,
		};

	}

	storeData = async () => {
		try {
		  await AsyncStorage.setItem('defaultTime', JSON.stringify(this.state.defaultTime));
		  //console.warn('saved!');
		  this.props.navigation.navigate('Timer');
		} catch (e) {
		  console.warn(`error saving data: ${e}`);
		}
	}

	testingFunc = () => {
		console.warn('chamou a função');
	}

	render(){
		return (
		<>
			<SafeAreaView>
				<View style={{flex: 1}}>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={text => this.setState({defaultTime: text})}
						maxLength={3}
						keyboardType={'numeric'}
						placeholder={'Time in minutes'}
					/>
				</View>

				<Text>{this.state.defaultTime}</Text>

				<View style={{flex: 1, marginTop: 50}}>
					<TouchableOpacity
						style={styles.actionButton}
						onPress={this.storeData}
					>
						<Text style={{color: '#FFF'}}>
							<FontAwesome5 name={'save'} solid />
						</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</>
		);
	}
}

export default Settings;
