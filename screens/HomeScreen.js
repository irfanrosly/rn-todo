import React, { useState } from "react"
import { Container, Content } from "native-base"
import AddToDo from "../components/AddTodo"
import AddToDoButton from "../components/AddToDoButton"

const AllListScreen = () => {
	const [newToDo, setNewToDo] = useState(false)
	saveToDoData = todo => {
		setNewToDo(false)
		console.log("Todo is: " + todo.title + " " + (todo.completed ? "completed!" : "not completed!"))
	}

	addNewToDo = () => {
		setNewToDo(!newToDo)
	}

	return (
		<Container>
			<Content>{newToDo && <AddToDo onPress={saveToDoData} onCancel={addNewToDo} />}</Content>
			<AddToDoButton onAddNewToDo={addNewToDo} disabled={newToDo} />
		</Container>
	)
}

export default AllListScreen
