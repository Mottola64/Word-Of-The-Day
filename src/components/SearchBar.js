import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

class SearchBar extends React.Component {
  state = {
    query: "",
  };

  handleSearch = (event) => {
    console.log(event.target.value);
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${event.target.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
  };
  
  onInputChange = (e) => {
    this.props.handleSearchChange(e);
    this.setState({
      query: e.target.value,
    });
  };


  render() {
    return (
      <div className="search">
        <InputGroup size="md" padding="20px" width="50%">
          <Input
            type="text"
            value={this.state.query}
            onChange={this.onInputChange}
            onSubmit={this.handleSearch()}
          />
          <InputGroupAddon addonType="append">
            <Button className="mb-2 mr-sm-2 mb-sm-0">
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;