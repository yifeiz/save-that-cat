import React from "react";
import axios from "axios";

import Form from "./Form";
import CatTable from "./CatTable";

class App extends React.Component {
  state = { dbData: [] };

  onAddDB = async term => {
    const response = await axios.post("http://localhost:3000/cats", term);
    this.setState({ dbData: [...this.state.dbData, term] });
  };

  onGetData = data => {
    this.setState({ dbData: data });
  };

  onDeleteData = async () => {
    const response = await axios.delete("http://localhost:3000/cats");
    this.setState({ dbData: [] });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>Save That Cat</h1>
        <Form onAdddDB={this.onAddDB} onDeleteDB={this.onDeleteData} />
        <CatTable onGetData={this.onGetData} DBdata={this.state.dbData} />
      </div>
    );
  }
}

export default App;
