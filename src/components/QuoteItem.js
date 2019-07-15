import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap';
import '../App.css';

const QuoteItem = (item => {
    return (
        <Card body inverse className="quote-card" color="danger" key={item.index}>
            <CardTitle>{item.quotes}</CardTitle>
            <CardText>{item.author}</CardText>
        </Card>
    )
})

export default QuoteItem;