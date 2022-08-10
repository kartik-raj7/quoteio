import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import axios from 'axios';
import User from './User';

function App(){
  const url = 'https://api.quotable.io/random'
  const [quote,setquote] = useState("");
  function getQuote(){
  axios.get(url).then(response=>{
    setquote(response.data)
    console.log(quote)
  })
};
  useEffect(()=>{
    getQuote();
  },[]);
//  },[]);
// function authorinfo(){

 return(
  <div className='App'>
    <div className='quote'>
    <p>{quote.content}</p>
    <p>Author:-  <a href={`https://en.wikipedia.org/wiki/${quote.author}`}>{quote.author}</a></p>
    
    <br></br>
    <div className='btn-cont'>
    <button className='btn'onClick={()=>getQuote()}>New Quote</button>
    <button>
    <a href={`http://twitter.com/intent/tweet?=${quote.text}`}
    target="_blank" rel = "noopener noreferrer" className='btn'>Tweet</a>
    </button>
    </div>
    </div>
  </div>    
 );
}
export default App;
