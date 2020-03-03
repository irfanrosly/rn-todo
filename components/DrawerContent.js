import * as React from "react"
import { SafeAreaView, View } from "react-native"
import { Thumbnail, Button, Text } from "native-base"

const DrawerContent = () => {
	const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png"
	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 20, marginTop: 50 }}>
			<View style={{ flexDirection: "row", flex: 0.1 }}>
				<Thumbnail source={{ uri: uri }} />
			</View>
			<View style={{ flex: 0.8 }}>
				<Text style={{ fontSize: 24 }}>Name</Text>
				<Text>Email</Text>
			</View>
			<View style={{ marginTop: 50, flex: 0.1 }}>
				<Button>
					<Text>Logout</Text>
				</Button>
			</View>
		</SafeAreaView>
	)
}

export default DrawerContent
