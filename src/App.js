import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Counter from './components/Counter';

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
