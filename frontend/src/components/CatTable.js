import React from "react";
import axios from "axios";

import TableRow from "./TableRow";

class CatTable extends React.Component {
  render() {
    const dbData = this.props.DBdata;

    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th> Name</th>
            <th> Colour</th>
            <th> Description</th>
            <th> Location</th>
          </tr>
        </thead>
        <tbody>
          {dbData.map((row, index) => {
            return <TableRow data={row} key={index} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default CatTable;
