import React from 'react'
import quotes from '../QuoteDB'

export default function QuoteAndAuthor(props) {
    const { quote, generateRandomQuote } = props;
    return (
        <div className="card" >

            <div className="card-body" id="quote-box">
                <p className="card-text" id="text">{quote.quote}</p>
                <h5 className="card-title" id="author">{quote.author}</h5>
                <button 
                    id="new-quote"
                    onClick={() => { generateRandomQuote(quotes) }}
                    type="submit">
                    <i class="fas fa-mouse"></i> Generate Quote
                </button>
                <button
                    className="ml-3"
                    id="tweet-quote"
                    onClick={() => {
                        generateRandomQuote(quotes);
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))
                    }}
                    type="submit"> <i class="fab fa-twitter"> </i> Share Quote
                </button>
            </div>
        </div>
    )
}