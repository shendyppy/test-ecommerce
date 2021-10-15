import {
	SET_IS_LOGGED_IN,
	SET_ACCESS_TOKEN,
	SET_LOADING_LOGIN,
	SET_LOADING_REGISTER,
} from "./actionType";
import orchestratorAPI from "../../apis/orchestratorAPI";

export function setLogStatus(payload) {
	return { type: SET_IS_LOGGED_IN, payload };
}

export function setToken(payload) {
	return { type: SET_ACCESS_TOKEN, payload };
}

export function setLoadingLogin(payload) {
	return { type: SET_LOADING_LOGIN, payload };
}

export function setLoadingRegister(payload) {
	return { type: SET_LOADING_REGISTER, payload };
}

export function logining(payload) {
	return function (dispatch) {
		dispatch(setLoadingLogin(true));
		return orchestratorAPI({
			method: `POST`,
			url: `/login`,
			data: payload,
		})
			.then((response) => {
				dispatch(setLogStatus(true));
				dispatch(setToken(response.data.accessToken));
				localStorage.setItem("access_token", response.data.accessToken);
			})

			.finally(() => {
				dispatch(setLoadingLogin(false));
			});
	};
}

export function registering(payload) {
	return function (dispatch) {
		dispatch(setLoadingRegister(true));
		return orchestratorAPI({
			method: `POST`,
			url: `/register`,
			data: payload,
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				dispatch(setLoadingRegister(false));
			});
	};
}
