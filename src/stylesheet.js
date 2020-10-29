
import {StyleSheet} from 'react-native';

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

export default styles;
