import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={SignInScreen}
        options={{
          animation: 'default',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
