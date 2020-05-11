//http://api.wordnik.com/v4/words.json/randomWord?api_key=YOURKEYHERE
import React from "react";
import Definition from './Definition'
import { Jumbotron } from "reactstrap";

class RandomWord extends React.Component {
  state = { word: "" };

  componentDidMount() {
    this.fetchRandomWord();
  }

  fetchRandomWord = () => {
    fetch(
      `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${process.env.REACT_APP_API_KEY_WORDNIK}`,
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .then((response) => {
        this.setState({
          word: response.word,
          results: response.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Random Word</h1>
          <ul>{this.state.word}</ul>
          <Definition word={this.state.word}/>
        </Jumbotron>
      </div>
    );
  }
}

export default RandomWord;
