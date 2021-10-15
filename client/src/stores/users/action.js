import userAPI from "../../apis/orchestratorAPI2";
import {
	SET_IS_LOGGED_IN,
	SET_ACCESS_TOKEN,
	SET_LOADING_LOGIN,
	SET_LOADING_REGISTER,
} from "./actionType";

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

export function logining(payload, history, toast) {
	return async function (dispatch) {
		try {
			dispatch(setLoadingLogin(true));
			const response = await userAPI({
				method: `POST`,
				url: `/login`,
				data: payload,
			});

			dispatch(setLogStatus(true));
			dispatch(setToken(response.data.accessToken));
			localStorage.setItem("access_token", response.data.accessToken);
			history.push("/home");
		} catch (err) {
			console.log(err);
			toast.error("Error in input your email/password!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} finally {
			dispatch(setLoadingLogin(false));
		}
	};
}

export function registering(payload) {
	return async function (dispatch) {
		try {
			dispatch(setLoadingRegister(true));
			const response = await userAPI({
				method: `POST`,
				url: `/register`,
				data: payload,
			});

			console.log(response);
		} catch (err) {
			console.log(err);
		} finally {
			dispatch(setLoadingRegister(false));
		}
	};
}
