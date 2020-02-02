import React from "react";

class TableRow extends React.Component {
  render() {
    const { name, colour, description, location } = this.props.data;
    return (
      <tr>
        <td data-label="Name"> {name} </td>
        <td data-label="Colour"> {colour} </td>
        <td data-label="Description"> {description} </td>
        <td data-label="Location"> {location} </td>
      </tr>
    );
  }
}

export default TableRow;
