import * as React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TabBarIcon from "../components/TabBarIcon"
import HomeScreen from "../screens/HomeScreen"
import CompletedListScreen from "../screens/CompletedListScreen"
import ActiveListScreen from "../screens/ActiveListScreen"
import Colors from "../constants/Colors"
import { MonoText } from "../components/StyledText"

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = "Home"

export default function BottomTabNavigator({ navigation, route }) {
	// Set the header title on the parent stack navigator depending on the
	// currently active tab. Learn more in the documentation:
	// https://reactnavigation.org/docs/en/screen-options-resolution.html
	navigation.setOptions({ headerTitle: getHeaderTitle(route) })

	return (
		<BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
			<BottomTab.Screen
				name='All'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							focused={focused}
							name='md-code-working'
							activeColor={Colors.tabIconSelected}
						/>
					),
					tabBarLabel: ({ focused }) => (
						<MonoText
							style={{
								color: focused ? Colors.tabIconSelected : Colors.tabIconDefault,
								fontSize: 12
							}}
						>
							All
						</MonoText>
					)
				}}
			/>
			<BottomTab.Screen
				name='Active'
				component={ActiveListScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name='md-checkmark-circle' activeColor='orange' />
					),
					tabBarLabel: ({ focused }) => (
						<MonoText style={{ color: focused ? "orange" : Colors.tabIconDefault, fontSize: 12 }}>
							Active
						</MonoText>
					)
				}}
			/>
			<BottomTab.Screen
				name='Completed'
				component={CompletedListScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name='md-checkmark-circle' activeColor='green' />
					),
					tabBarLabel: ({ focused }) => (
						<MonoText style={{ color: focused ? "green" : Colors.tabIconDefault, fontSize: 12 }}>
							Completed
						</MonoText>
					)
				}}
			/>
		</BottomTab.Navigator>
	)
}

function getHeaderTitle(route) {
	const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

	switch (routeName) {
		case "All":
			return "All List"
		case "Active":
			return "Active List"
		case "Completed":
			return "Completed List"
	}
}
