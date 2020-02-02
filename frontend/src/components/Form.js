import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    colour: "",
    description: "",
    location: ""
  };

  onButtonClick = event => {
    this.props.onAddDB(this.state);
    console.log("Submitted");
  };

  onButtonDelete = event => {
    const password = prompt("ADMIN ONLY");
    if (password == "Password1") {
      const clicked = window.confirm("ARE YOU REALLY SURE");
      if (clicked) {
        const clicked2 = window.confirm("YO FAM U REALLY SURE??");

        if (clicked2) {
          const clicked3 = window.confirm("FINAL WARNING");
          if (clicked3) {
            this.props.onDeleteDB();
            console.log("DELETED");
          } else {
            console.log("GOOD CHOICE");
          }
        } else {
          console.log("Jeez make up your mind");
        }
      } else {
        console.log("ok then");
      }
    } else {
      console.log("jk");
    }
  };

  render() {
    const isDisabled =
      this.state.name.length > 0 &&
      this.state.colour.length > 0 &&
      this.state.description.length > 0 &&
      this.state.location.length > 0;
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label> Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label> Colour</label>
            <input
              type="text"
              value={this.state.colour}
              onChange={e => this.setState({ colour: e.target.value })}
            />
          </div>
          <div className="field">
            <label> description</label>
            <input
              type="text"
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="field">
            <label> Location</label>
            <input
              type="text"
              value={this.state.location}
              onChange={e => this.setState({ location: e.target.value })}
            />
          </div>
          <button
            type="button"
            disabled={!isDisabled}
            onClick={this.onButtonClick}
            className="ui blue button"
          >
            Submit
          </button>
          <button
            type="button"
            disabled={!isDisabled}
            onClick={this.onButtonDelete}
            className="ui red button"
          >
            NUKE ALL
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
