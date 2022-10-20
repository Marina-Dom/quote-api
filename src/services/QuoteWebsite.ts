import axios from 'axios';
import { Quoters } from '../model/Quoters';

export function getQuote(){
    return axios.get<Quoters[]>('https://grandcircusco.github.io/demo-apis/quotes.json');

}
