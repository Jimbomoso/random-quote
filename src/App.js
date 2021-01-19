import React, { Component } from 'react'
import QuoteAndAuthor from './components/QuoteAndAuthor';
import quotes from './QuoteDB';

export default class App extends Component {

  //state
  state = {
    quote: quotes[0].quote,
    author: quotes[0].author,
  }
  
  //generate quote function
  generateRandomQuote = (arr) => {
    let num = Math.floor(Math.random() * quotes.length)

    let newQuote = quotes[num];

    //update state
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    })

    this.shuffleQuotes(quotes)
  }

  //shuffle quotes function
  shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  render() {
    return (
      <div className="container" id="quote-box">
        <h1 className="text-center">Random Quote</h1>
        <QuoteAndAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
          />
      </div>
    )
  }
}