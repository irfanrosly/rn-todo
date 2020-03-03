import { createReducer, createActions } from "reduxsauce"
import Immutable from "seamless-immutable"

const { Types, Creators } = createActions({
	login: ["payload"],
	signUp: ["payload"],
	logout: null
})

export const AuthTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
	data: [],
	loggedIn: true
})

const login = (state, action) => {
	console.log(state.data)
	if (
		action.payload.username === state.data.username &&
		action.payload.password === state.data.password
	) {
		console.log
		return state.merge({ ...state, loggedIn: true })
	} else {
		return state.merge({ ...state })
	}
}
const signUp = (state, action) => {
	return state.merge({
		...state,
		data: { ...action.payload }
	})
}

const logout = (state, action) => {
	return state.merge({
		...state,
		loggedIn: false
	})
}

export const auth = createReducer(INITIAL_STATE, {
	[Types.LOGIN]: login,
	[Types.SIGN_UP]: signUp,
	[Types.LOGOUT]: logout
})
