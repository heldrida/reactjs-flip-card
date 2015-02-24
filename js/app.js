var App = React.createClass({
	
	// set the initial state, so that the tiles are not flipped by default
	getInitialState: function () {
		return {
			flipped: false
		};
	},

	// method to invert the flip state property
	flip: function () {
		this.setState({ flipped: !this.state.flipped });
	},

	// draw the application
	render: function () {
		return <div>
			<Flipper flipped={this.state.flipped} orientation="horizontal" />
			<Flipper flipped={this.state.flipped} orientation="vertical" />

			<div className="button-container">
				<button onClick={this.flip}>Flip!</button>
			</div>
		</div>;
	}

});