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

// this is responsible for drawing the various container divs
// and setting each of the classes used in the animation to flip from front to back
var Flipper = React.createClass({

	render: function () {
		return 	<div className={"flipper-container " + this.props.orientation}>
					<div className={"flipper" + (this.props.flipped ? "flipped" : "")}>
						<Front>the front!</Front>
						<Back>the back!</Back>
					</div>
				</div>;
	}

}); 