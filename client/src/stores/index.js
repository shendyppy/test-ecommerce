import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./users/reducer";
import itemReducer from "./items/reducer";

const store = createStore(
	combineReducers({
		user: userReducer,
		item: itemReducer,
	}),
	applyMiddleware(thunk)
);

export default store;
