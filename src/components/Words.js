import React from "react";
import SearchBar from "./SearchBar";

class Words extends React.Component {
 

  handleSearchChange = (e) => {
    console.log(e.target.value);
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    return (
      <>
        <SearchBar handleSearchChange={this.handleSearchChange}/>
        <div>DISPLAY WORDS</div>
      </>
    );
  }
}

export default Words;
