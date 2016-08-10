class FavoriteColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }

  render() {
    let colorToRender = this.state.color;

    // Uncomment to only allow red, blue or black (default)
    // if (!["red", "blue"].includes(this.state.color)) {
    //   // Change the color to black if not red or blue
    //   colorToRender = "black";
    // }

    const colorStyle = {
      fontSize: 18,
      color: colorToRender
    };

    return (
      <div>
        <div>{this.props.name}&apos;s favorite color is
        <span className="label" style={colorStyle}>
          {this.state.color}
        </span>
        </div>
        Please enter {this.props.name}&apos;s favorite color:
        <input
          type="text"
          className="form-control"
          placeholder="Enter your favorite color"
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      color: e.target.value
    });
  }
}


class MyParentComponent extends React.Component {
  render() {
    return (
      <div>
        <FavoriteColor name="Mary" />
        <br />
        <br />
        <br />
        <FavoriteColor name="David" />
      </div>
    );
  }
}

ReactDOM.render(
  <MyParentComponent />,
  document.getElementById("container")
);
