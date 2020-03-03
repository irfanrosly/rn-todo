import React, { useState } from "react"
import { SafeAreaView, View, AsyncStorage } from "react-native"
import { Text, Input, Item, Button } from "native-base"
import { useDispatch } from "react-redux"
import AuthActions from "../../redux/auth"

const SignUpScreen = ({ navigation }) => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")

	const dispatch = useDispatch()

	const handleClickSignUp = () => {
		const payload = { firstName, lastName, email, username, password }
		dispatch(AuthActions.signUp(payload))
		navigation.goBack()
	}

	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 30 }}>
			<View style={{ flex: 0.3 }}></View>
			<View style={{ flex: 0.7 }}>
				<View style={{ flexDirection: "row", marginTop: 10 }}>
					<View style={{ flex: 0.5 }}>
						<Item regular>
							<Input
								placeholder='First Name'
								onChangeText={e => setFirstName(e)}
								autoCapitalize='none'
							/>
						</Item>
					</View>
					<View style={{ flex: 0.5 }}>
						<Item regular>
							<Input
								placeholder='Last Name'
								onChangeText={e => setLastName(e)}
								autoCapitalize='none'
							/>
						</Item>
					</View>
				</View>
				<Item regular style={{ marginTop: 10 }}>
					<Input placeholder='Username' onChangeText={e => setUsername(e)} autoCapitalize='none' />
				</Item>
				<Item regular style={{ marginTop: 10 }}>
					<Input placeholder='Email' onChangeText={e => setEmail(e)} autoCapitalize='none' />
				</Item>
				<Item regular style={{ marginTop: 10 }}>
					<Input
						placeholder='Password'
						secureTextEntry
						onChangeText={e => setPassword(e)}
						autoCapitalize='none'
					/>
				</Item>
				<Button
					style={{ marginTop: 10, justifyContent: "center" }}
					onPress={() => handleClickSignUp()}
				>
					<Text>Sign Up</Text>
				</Button>
			</View>
		</SafeAreaView>
	)
}

export default SignUpScreen
