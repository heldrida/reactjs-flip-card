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

// Front and Back classes are responsible for showing the appropriate content based on the flipped status
// of the parent Flipper class
// the children prop contains the child content of the class
var Front = React.createClass({
	render: function () {
		return <div className="front tite">{this.props.children}</div>;
	}
});

var Back = React.createClass({
	render: function () {
		return <div className="back tile">{this.props.children}</div>
	}
});

// Render to DOM element
React.render(<App />, document.getElementById("main"));