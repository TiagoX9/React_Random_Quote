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

        this.state = {
            list: [{ index: 1, quote: 'first quote', author: 'first author' }, { index: 2, quote: 'second quote', author: 'second author' }, { index: 3, quote: 'third quote', author: 'third author' }],
            selectedQuote: ''
        }
    }

    componentWillMount() {
        this.setState({
            selectedQuote: this.state.list[Math.floor(Math.random() * list.length)],
        })
    }


    addQuote(quote) {
        this.setState(() => {
            list.push({
                index: list.length + 1,
                quote: quote.newQuote,
                author: quote.author
            });
            return {
                list,
                selectedQuote: this.state.list[Math.floor(Math.random() * list.length)]
            }
        })

        console.log(this.state.list.length)
    }
    render() {
        return (
            <div>

                <div key={this.state.list.index}>
                    <QuoteItem quotes={this.state.selectedQuote.quote} author={this.state.selectedQuote.author} />
                </div>



                <QuoteForm addQuote={this.addQuote} />
            </div>
        )
    }
}
