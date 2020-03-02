import { createReducer, createActions } from "reduxsauce"
import Immutable from "seamless-immutable"

const { Types, Creators } = createActions({
	addToDo: ["title", "completed"],
	editToDo: ["title", "completed"],
	deleteToDo: ["payload"]
})

export const ToDoTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
	todos: []
})

const addToDo = (state, action) => {
	return state.merge({
		todos: [...state.todos, action.todo]
	})
}

const editToDo = (state, action) => {
	let todos = [...state.todos]
	let indexOfUpdate = todos.findIndex(todo => {
		return todo.title == action.todo.title
	})
	todos[indexOfUpdate] = action.todo
	return state.merge({
		...state,
		todos: todos
	})
}

const deleteToDo = (state, action) => {
	return state.merge({
		todos: state.todos.filter(function(todo) {
			return todo.title != action.todo.title
		})
	})
}

export const toDo = createReducer(INITIAL_STATE, {
	[Types.ADD_TO_DO]: addToDo,
	[Types.EDIT_TO_DO]: editToDo,
	[Types.DELETE_TO_DO]: deleteToDo
})
