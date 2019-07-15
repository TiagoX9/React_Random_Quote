import React, { Component } from 'react'
import QuoteForm from './QuoteForm';
import QuoteItem from './QuoteItem';

var list = []
list.push({ index: 1, quote: 'first quote', author: 'first author' });
list.push({ index: 2, quote: 'second quote', author: 'second author' });
list.push({ index: 3, quote: 'third quote', author: 'third author' });




export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.addQuote = this.addQuote.bind(this);
    }
    addQuote(quote) {
        list.push({
            index: list.length + 1,
            quote: quote.newQuote,
            author: quote.author
        });
        this.setState({ list: quote })
    }
    render() {
        return (
            <div>
                {
                    list.map((quote, index) => {
                        return (
                            <div key={index}>
                                <QuoteItem quotes={quote.quote} author={quote.author} />
                            </div>

                        )
                    })
                }
                <QuoteForm addQuote={this.addQuote} />
            </div>
        )
    }
}
