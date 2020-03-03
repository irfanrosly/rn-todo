import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "./AuthNavigator"
import DrawerNavigator from "./DrawerNavigator"
import { useSelector } from "react-redux"
const Stack = createStackNavigator()

function AppNavigator() {
	const loggedIn = useSelector(state => state.auth.loggedIn)

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={loggedIn ? "Root" : "Auth"}
				headerMode='none'
				screenOptions={{ gestureEnabled: false }}
			>
				<Stack.Screen name='Auth' component={AuthNavigator} />
				<Stack.Screen name='Root' component={DrawerNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigator
