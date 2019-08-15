import React, { Component } from 'react'
import QuoteForm from './QuoteForm';
import QuoteItem from './QuoteItem';
import Footer from './Footer';
import { Button } from 'reactstrap';
import firebase from '../firebase/firebase';

const list = firebase.database().ref('list/1/quote');

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.addQuote = this.addQuote.bind(this);
        this.randomizeQuote = this.randomizeQuote.bind(this);

        this.state = {
            list: list,
            selectedQuote: ''
        }
    }

    componentWillMount() {
        const listRef = firebase.database().ref('list');
        listRef.on('value', (snapshot) => {
            let lists = snapshot.val();
            let newState = [];
            for (let list in lists) {
                newState.push({
                    index: list,
                    quote: lists[list].quote,
                    author: lists[list].author
                });
            }
            const random = newState[Math.floor(Math.random() * newState.length)];
        this.setState({
            list: newState,
            selectedQuote: random
         })
        })
        
    }


    randomizeQuote() {
        const {list} = this.state;
        const random = list[Math.floor(Math.random() * list.length)];
        this.setState({
            selectedQuote: random,
        })
        console.log(this.state.list.quote);
    }


    addQuote(quote) {
        this.setState(() => {
            list.push({
                index: list.length + 1,
                quote: quote.quote,
                author: quote.author
            });
            return {
                list,
                selectedQuote: this.state.list[Math.floor(Math.random() * list.length)]
            }
        })

        console.log(this.state.list.length)
        console.log(quote);
    }
    render() {
        return (
            <div>
                <div key={this.state.list.index}>
                    <QuoteItem quotes={this.state.selectedQuote.quote} author={this.state.selectedQuote.author} />
                </div>
                <div className="buttons">
                <div className="margin-button">
                <Button  onClick={this.randomizeQuote} className="bg-primary">
                <span className="fa fa-refresh fa-lg margin-button"></span>
                Next Quote
                </Button>
                </div>
               <div className="margin-button">
               <QuoteForm  addQuote={this.addQuote} />
               </div>
                </div>
                <Footer />  
            </div>
            
        )
    }
}
