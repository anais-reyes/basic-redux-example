import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Counter from './components/Counter';
import store from './store/mainStore';

window.store = store;

class App extends Component {
	render() {
		return (
			<div className="App">
				<Counter />
				<br />
				<Input />
			</div>
		);
	}
}

export default App;
