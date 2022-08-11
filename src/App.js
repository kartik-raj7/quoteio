import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {button} from 'bootstrap'

function App(){
  const url = 'https://api.quotable.io/random'
  const [quote,setquote] = useState("");
  function getQuote(){
  axios.get(url).then(response=>{
    setquote(response.data)
    console.log(quote)
  })
};
const text = quote.text;
  useEffect(()=>{
    getQuote();
  },[]);
//  },[]);
// function authorinfo(){

 return(
  <div className='App'>
    <div className='quote'>
    <h1>Quote of the Day</h1>
    <p>{quote.content}</p>
    <p className='authors'>Author:-  <a className="author" href={`https://en.wikipedia.org/wiki/${quote.author}`}>{quote.author}</a></p>
    
    <br></br>
    <div className='btn-cont'>
    <button className='btn'onClick={()=>getQuote()}>New Quote</button>
    <button className='btn'>
    <a href={`https://twitter.com/intent/tweet?text=${quote.content}`}
    target="_blank" >Tweet</a>
    </button>
    </div>
    </div>
  </div>    
 );
}
export default App;
