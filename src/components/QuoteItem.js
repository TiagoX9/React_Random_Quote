import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap';
import '../App.css';

const QuoteItem = (item => {
    return (
        <div className="quote-card">
            <Card body className="card" key={item.index}>
                <CardTitle>{item.quotes}</CardTitle>
                <CardText>{item.author}</CardText>
            </Card>
        </div>

    )
})

export default QuoteItem;