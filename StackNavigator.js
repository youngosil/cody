import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screen/HomeScreen';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name ='Home' component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator