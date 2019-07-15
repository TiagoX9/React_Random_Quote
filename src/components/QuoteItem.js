import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap';

const QuoteItem = (item => {
    return (
        <Card key={item.index}>
            <CardTitle>{item.quotes}</CardTitle>
            <CardText>{item.author}</CardText>
        </Card>
    )
})

export default QuoteItem;