import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'reactstrap';

class QuoteForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        var newQuote = this.refs.quote.value;
        var author = this.refs.author.value;
        this.props.addQuote({ newQuote, author });
        this.refs.form.reset();
    }

    render() {
        return (
            <form ref="form" onSubmit={this.onSubmit}>
                <input type="text" ref="quote" className="form-control" placeholder="add new quote" />
                <input type="text" ref="author" className="form-control" placeholder="add new author" />
                <button type="submit" className="btn btn-default">Add</button>
            </form>
        )
    }

}

export default QuoteForm;