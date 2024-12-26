class Chef extends React.Component {
  constructor() {
    super();
    this.state = { dish: "Empty Plate" };
  }

  cookDish() {
    this.setState({ dish: "Cooked Meal" });
  }

  render() {
    return <h1>{this.state.dish}</h1>;
  }
}

