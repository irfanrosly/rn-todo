import * as React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import BottomTabNavigator from "./BottomTabNavigator"
import DrawerContent from "../components/DrawerContent"

const Drawer = createDrawerNavigator()

export default function App() {
	return (
		<Drawer.Navigator initialRouteName='Main' drawerContent={DrawerContent}>
			<Drawer.Screen name='Main' component={BottomTabNavigator} />
		</Drawer.Navigator>
	)
}
