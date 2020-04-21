import React from "react";

class WordOfTheDay extends React.Component {
  state = {
    word: null,
  };

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
      .then((data, response) => console.log(data, response))
      .then((response) => {
        this.setState({
          word: response.word,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <h1>WordOfTheDay</h1>
        <ul>{this.state.word}</ul>
        <ul></ul>
      </>
    );
  }
}

export default WordOfTheDay;
