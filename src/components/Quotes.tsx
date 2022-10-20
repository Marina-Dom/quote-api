import React, {useEffect, useState} from 'react';
import { Quoters } from '../model/Quoters';
import { getQuote } from '../services/QuoteWebsite';
import './Quotes.css';

export function Quotes(){
    const [quotes, setQuotes] = useState<Quoters[]>([]);

    useEffect(() => {
        getQuote().then((response) => {
            const { data } = response;
            setQuotes(data); 
        });
    }, []);

    return (
        <table>
            {quotes.map((quotes, i) => (
                <tr>
                    <td key = {i} className='quoteHeader'>New Quote!</td>
                    <td className='text'> {quotes.text}</td>
                    <td className='author'> {quotes.author}</td>
                </tr>
            ))}
        </table>

        // <div>
        //     <ul>
        //         {quotes.map((quotes, i) =>
        //             <li key = {i}>{quotes.author}</li>
        //         )}
        //     </ul>
        // </div>
        // <table className='QuotesAuthors'>
        //     {quotes.map((quote) => {
        //         <

        //     })}
        // </table>
    );
}

            // <tr>
            //     <td className='textQuote'>
            //         <p>Quote: {quote.text}</p>
            //     </td>
            //     <td className='textAuthor'>
            //         <p>Quote: {quote.author}</p>
            //     </td>
            // </tr> 
