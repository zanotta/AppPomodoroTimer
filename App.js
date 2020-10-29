import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Timer from './src/pages/Timer';
import Settings from './src/pages/Settings';

const Stack = createStackNavigator();

class App extends React.Component {

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Timer">
          <Stack.Screen
            name="Timer"
            component={Timer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}

export default App;
