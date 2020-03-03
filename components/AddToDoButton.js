import React from "react"
import { Container, Fab, Icon } from "native-base"

const AddTodoButton = props => {
	return (
		<Fab
			style={{ backgroundColor: "#5067FF" }}
			position='bottomRight'
			onPress={props.onAddNewToDo}
			disabled={props.disabled}
		>
			<Icon name='add' />
		</Fab>
	)
}

export default AddTodoButton
