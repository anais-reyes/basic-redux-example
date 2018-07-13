const initialState = {
	counter: 0,
	value: '',
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT': {
			let newState = Object.assign({}, state, { counter: state.counter + 1 });
			return newState;
		}
		case 'DECREMENT': {
			let newState = Object.assign({}, state, { counter: state.counter - 1 });
			return newState;
		}
		case 'SET_TEXT': {
			let newState = Object.assign({}, state, { value: action.payload });
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default mainReducer;
