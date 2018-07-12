import React, { Component } from 'react';
import setText from '../actions/setText';
import { connect } from 'react-redux';

class Input extends Component {
	setText = event => {
		this.props.setText(event.target.value);
	};
	render() {
		return (
			<div>
				<input value={this.props.value} onChange={this.setText} name="input" />
				<p>{this.props.value}</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { value: state.value };
};

const mapDispatchToProps = dispatch => {
	return {
		setText: text => dispatch(setText(text)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Input);
