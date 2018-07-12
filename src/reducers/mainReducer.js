const initialState = {
	counter: 0,
	value: '',
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT': {
			let newState = { counter: state.counter, value: state.value };
			newState.counter = newState.counter + 1;
			return newState;
		}
		case 'DECREMENT': {
			let newState = { counter: state.counter, value: state.value };
			newState.counter = newState.counter - 1;
			return newState;
		}
		case 'SET_TEXT': {
			let newState = { counter: state.counter, value: state.value };
			newState.value = action.payload;
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default mainReducer;
