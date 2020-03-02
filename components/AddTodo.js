import React, { useState } from "react"
import { Body, Icon, CheckBox, ListItem, Input, Button } from "native-base"

const AddTodo = props => {
	const [title, setTitle] = useState("")
	const [completed, setCompleted] = useState(false)
	const [createdAt, setCreatedAt] = useState("")
	const { onPress, onCancel } = props

	return (
		<ListItem>
			<CheckBox checked={completed} onPress={() => setCompleted(!completed)} />
			<Body>
				<Input
					placeholder='What needs to be done?'
					onChangeText={value => setTitle(value)}
					onSubmitEditing={() => onPress({ title, completed })}
				/>
			</Body>
			<Button transparent onPress={onCancel}>
				<Icon name={"trash"} />
			</Button>
		</ListItem>
	)
}

export default AddTodo
