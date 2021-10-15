import {
	SET_ITEMS,
	SET_ITEM_DETAIL,
	SET_LOADING_ADD,
	SET_LOADING_EDIT,
	SET_LOADING_FETCH,
} from "./actionType";

const initialState = {
	items: [],
	itemDetail: [],
	loadingAdd: false,
	loadingEdit: false,
	loadingFetch: true,
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_ITEMS:
			return { ...state, items: payload };
		case SET_ITEM_DETAIL:
			return { ...state, itemDetail: payload };
		case SET_LOADING_ADD:
			return { ...state, loadingAdd: payload };
		case SET_LOADING_EDIT:
			return { ...state, loadingEdit: payload };
		case SET_LOADING_FETCH:
			return { ...state, loadingFetch: payload };
		default:
			return state;
	}
};

export default reducer;
