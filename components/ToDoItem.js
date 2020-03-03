import React, { useState } from "react"
import { ListItem, CheckBox, Body, Button, Icon, Input } from "native-base"
import { useDispatch } from "react-redux"
import ToDoActions from "../redux/toDo"

const ToDoItem = props => {
	const { todo } = props
	const dispatch = useDispatch()

	const [value, setValue] = useState(todo.title)

	return (
		<ListItem>
			<CheckBox
				checked={todo.completed}
				onPress={() =>
					dispatch(
						ToDoActions.editToDo({
							...todo,
							completed: !todo.completed
						})
					)
				}
			/>
			<Body>
				<Input
					value={value}
					onChangeText={e => setValue(e)}
					onEndEditing={() =>
						dispatch(
							ToDoActions.editToDo({
								...todo,
								title: value
							})
						)
					}
				/>
				{/* <Text
					onPress={() =>
						dispatch(
							ToDoActions.editToDo({
								...todo,
								title: "Speedy"
							})
						)
					}
				>
					{todo.title}
				</Text> */}
			</Body>
			<Button transparent onPress={() => dispatch(ToDoActions.deleteToDo(todo))}>
				<Icon name={"trash"} />
			</Button>
		</ListItem>
	)
}

export default ToDoItem
