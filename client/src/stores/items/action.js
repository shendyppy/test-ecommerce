import {
	SET_ITEMS,
	SET_ITEM_DETAIL,
	SET_LOADING_FETCH,
	SET_LOADING_ADD,
	SET_LOADING_EDIT,
} from "./actionType";

import itemAPI from "../../apis/orchestratorAPI";

export function setItems(payload) {
	return {
		type: SET_ITEMS,
		payload,
	};
}

export function setItemDetail(payload) {
	return {
		type: SET_ITEM_DETAIL,
		payload,
	};
}

export function setLoadingFetch(payload) {
	return {
		type: SET_LOADING_FETCH,
		payload,
	};
}

export function setLoadingAdd(payload) {
	return {
		type: SET_LOADING_ADD,
		payload,
	};
}

export function setLoadingEdit(payload) {
	return {
		type: SET_LOADING_EDIT,
		payload,
	};
}

export function fetchItems() {
	return async function (dispatch) {
		try {
			dispatch(setLoadingFetch(true));
			const response = await itemAPI.get("/");

			dispatch(setItems(response.data));
		} catch (err) {
			console.log(err);
		} finally {
			dispatch(setLoadingFetch(false));
		}
	};
}

export function fetchItemByID(payload) {
	return async function (dispatch) {
		try {
			dispatch(setLoadingFetch(true));
			const response = await itemAPI.get(`/${payload}`);

			dispatch(setItemDetail(response.data));
		} catch (err) {
			console.log(err);
		} finally {
			dispatch(setLoadingFetch(false));
		}
	};
}

export function addItem(payload) {
	return async function (dispatch) {
		try {
			dispatch(setLoadingAdd(true));

			await itemAPI.post("/", payload);
		} catch (err) {
			console.log(err);
		} finally {
			dispatch(setLoadingAdd(false));
		}
	};
}

export function editItem(id, payload) {
	return async function (dispatch) {
		try {
			dispatch(setLoadingEdit(true));
			await itemAPI.put(`/${id}`, payload);
		} catch (err) {
			console.log(err);
		} finally {
			dispatch(setLoadingEdit(false));
		}
	};
}

export function deleteItem(id) {
	return async function (dispatch) {
		try {
			await itemAPI.delete(`/${id}`);
			dispatch(fetchItems());
		} catch (err) {
			console.log(err);
		}
	};
}
