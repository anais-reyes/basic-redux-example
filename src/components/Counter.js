import React, { Component } from 'react';
import { connect } from 'react-redux';
import incrementCount from '../actions/incrementCount';
import decrementCount from '../actions/decrementCount';

class Counter extends Component {
	increment = () => {
		this.props.incrementCount();
	};
	decrement = () => {
		this.props.decrementCount();
	};
	render() {
		return (
			<div>
				<button onClick={this.increment}>+</button>
				<p>{this.props.counter}</p>
				<button onClick={this.decrement}>-</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { counter: state.counter };
};

const mapDispatchToProps = dispatch => {
	return {
		incrementCount: () => dispatch(incrementCount()),
		decrementCount: () => dispatch(decrementCount()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);
