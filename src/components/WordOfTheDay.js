import React from "react";
import { Jumbotron } from "reactstrap";

class WordOfTheDay extends React.Component {
  state = { word: "" };

  componentDidMount() {
    this.fetchWordOfTheDay();
  }

  fetchWordOfTheDay = () => {
    fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {return response})
    //   .then((response) => {
    //     this.setState({
    //       word: response.word,
    //       results: response.results,

    //     });
    //   })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Word Of The Day</h1>
          <ul>{this.state.word}</ul>
          <ul></ul>
        </Jumbotron>
      </div>
    );
  }
}

export default WordOfTheDay;
