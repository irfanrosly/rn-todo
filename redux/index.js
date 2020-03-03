import { combineReducers } from "redux"

import { toDo } from "./toDo"
import { auth } from "./auth"

export default combineReducers({
	toDo,
	auth
})
