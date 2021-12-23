import React, {Component} from 'react';
import QuotesArray from "./Quotes";
import '../QuoteContainer.css'

class QuoteContainer extends Component {
    constructor() {
        super();
        this.state = {
            quote:'',
            author:''
        }
    }

    componentDidMount() {
        let randomNum = Math.floor(Math.random() * QuotesArray.length);
            this.setState({quote:QuotesArray[randomNum]})
            this.setState({author:QuotesArray[randomNum]})

    }

    getNewQuote = () => {
       let randomNum = Math.floor(Math.random() * QuotesArray.length);
            this.setState({quote:QuotesArray[randomNum]})
            this.setState({author:QuotesArray[randomNum]})
    }

    render() {
    const {quote} = this.state.quote;
    const {author} = this.state.author;
        return (
            <div className={'container'}>
                <div className={'QuoteCard'}>
                    <h1 className={'Quote'}>"{quote}"</h1>
                    <p className={'Author'}>–<i>{author}</i></p>
                    <button id="generateQuote" onClick={(this.getNewQuote)}>New Quote</button>
                </div>
            </div>
        );
    }
}

export default QuoteContainer;
