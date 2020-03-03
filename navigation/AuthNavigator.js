import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../screens/Auth/LoginScreen"
import SignUpScreen from "../screens/Auth/SignUpScreen"

const Stack = createStackNavigator()

function AuthNavigator() {
	return (
		<Stack.Navigator headerMode='none'>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='Signup' component={SignUpScreen} />
		</Stack.Navigator>
	)
}

export default AuthNavigator
