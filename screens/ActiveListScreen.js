import React, { useState } from "react"
import { Container, Content } from "native-base"
import { useDispatch, useSelector } from "react-redux"
import AddToDo from "../components/AddTodo"
import AddToDoButton from "../components/AddToDoButton"
import ToDoItem from "../components/ToDoItem"
import ToDoActions from "../redux/toDo"

const ActiveListScreen = () => {
	const [newToDo, setNewToDo] = useState(false)
	const todos = useSelector(state => state.toDo.todos)
	const dispatch = useDispatch()

	saveToDoData = todo => {
		setNewToDo(false)
		dispatch(ToDoActions.addToDo(todo))
	}

	addNewToDo = () => {
		setNewToDo(!newToDo)
	}

	return (
		<Container>
			<Content>
				{newToDo && <AddToDo onPress={saveToDoData} onCancel={addNewToDo} />}
				{todos
					.filter(function(todo) {
						return !todo.completed
					})
					.map((todo, index) => (
						<ToDoItem key={index} todo={todo} />
					))}
			</Content>

			<AddToDoButton onAddNewToDo={addNewToDo} disabled={newToDo} />
		</Container>
	)
}

export default ActiveListScreen
