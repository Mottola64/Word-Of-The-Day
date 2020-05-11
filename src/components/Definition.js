import React from "react";

class Definition extends React.Component {
  fetchDefinition = () => {
    fetch(
      `https://api.wordnik.com/v4/word.json/${this.state.word}/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=${process.env.REACT_APP_API_KEY_WORDNIK}`
    )
    .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .then((response) => {
        this.setState({
          definition: response.definition,
          results: response.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
  return <div>{this.state.definition}</div>;
  }
}

export default Definition;
