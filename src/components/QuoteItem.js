import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap';
import Spinner from './Spinner'; 
import '../App.css';

const QuoteItem = (item => {
    if (item == null) {
        return (  
    <Spinner />
        )
    }
    else {
        return(
            <div className="quote-card">
            <Card body className="card" key={item.index}>
                <CardTitle className="quote">{item.quotes}</CardTitle>
                <CardText className="author">-- {item.author}</CardText>
            </Card>
        </div>
        )
    }
    
})

export default QuoteItem;