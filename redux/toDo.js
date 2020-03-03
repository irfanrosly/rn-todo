import { createReducer, createActions } from "reduxsauce"
import Immutable from "seamless-immutable"

const { Types, Creators } = createActions({
	addToDo: ["payload"],
	editToDo: ["payload"],
	deleteToDo: ["payload"]
})

export const ToDoTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
	todos: []
})

const addToDo = (state, action) => {
	return state.merge({
		todos: [...state.todos, action.payload]
	})
}

const editToDo = (state, action) => {
	console.log(action)
	let todos = [...state.todos]
	let indexOfUpdate = todos.findIndex(todo => {
		return todo.id == action.payload.id
	})
	todos[indexOfUpdate] = action.payload
	return state.merge({
		...state,
		todos: todos
	})
}

const deleteToDo = (state, action) => {
	return state.merge({
		todos: state.todos.filter(function(todo) {
			return todo.id != action.payload.id
		})
	})
}

export const toDo = createReducer(INITIAL_STATE, {
	[Types.ADD_TO_DO]: addToDo,
	[Types.EDIT_TO_DO]: editToDo,
	[Types.DELETE_TO_DO]: deleteToDo
})
