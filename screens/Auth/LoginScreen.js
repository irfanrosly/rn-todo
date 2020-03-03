import React, { useState, useEffect } from "react"
import { SafeAreaView, View } from "react-native"
import { Text, Input, Item, Button } from "native-base"
import { useDispatch } from "react-redux"
import AuthActions from "../../redux/auth"

const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const dispatch = useDispatch()

	const handleClickLogin = () => {
		dispatch(AuthActions.login({ username, password, navigation }))
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 0.3 }}></View>
			<View style={{ flex: 0.7, marginHorizontal: 30 }}>
				<Item>
					<Input placeholder='Username' onChangeText={e => setUsername(e)} autoCapitalize='none' />
				</Item>
				<Item>
					<Input
						placeholder='Password'
						secureTextEntry
						onChangeText={e => setPassword(e)}
						autoCapitalize='none'
					/>
				</Item>
				<Button
					style={{ marginTop: 10, justifyContent: "center" }}
					onPress={() => handleClickLogin()}
				>
					<Text>Login</Text>
				</Button>
				<View style={{ flexDirection: "row", marginTop: 5 }}>
					<View style={{ flex: 0.6 }}>
						<Text onPress={() => alert("sign up")} onPress={() => navigation.navigate("Signup")}>
							Sign Up Here
						</Text>
					</View>
					<View style={{ flex: 0.4 }}>
						<Text>Forgot Password?</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default LoginScreen
