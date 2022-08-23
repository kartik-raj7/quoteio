import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

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
  const [isdark,setdark] = useState(false);
  // console.log(dark);
//  },[]);
// function authorinfo(){
  function darkmode(){
        setdark(!isdark);
        console.log(isdark);
        setButtonText(isdark?" Light ☀️":"Dark 🌑");
  };
  const [buttonText, setButtonText] = useState('Light');

 return(
  <div className={isdark ? "App-dark" : "App"}>
    <div className="quote">
    {/* <input type="checkbox"onChange={()=>darkmode()}></input>
    <label ></label><br></br> */}
    <button className={isdark ? "btn-dark" : "btn-l"}onClick={()=>darkmode()}>{buttonText}</button>
    <h1>Quote of the Day</h1>
    <p className={isdark?"p":"p-dark"}>{quote.content}</p>
    <p className="authors">Author:-  <a className={isdark?"a":"a-d"} href={`https://en.wikipedia.org/wiki/${quote.author}`}>{quote.author}</a></p>
    
    <br></br>
    <div className='btn-cont'>
    <button className='btn'onClick={()=>getQuote()}>New Quote</button>
    <button className='btn'>
    <a href={`https://twitter.com/intent/tweet?text=${quote.content}`}
    target="_blank" >Tweet</a>
    </button>
    <button className='btn'>
    <a href={`https://wa.me/?text=${quote.content}`}
    target="_blank" >Whatsapp</a>
    </button>
    </div>
    </div>
  </div> 
 );
}
export default App;
