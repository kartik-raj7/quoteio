import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Home from './Home'
function Error404(){
    return(
        <>
        <h1>Could Not Find Page You are Looking For</h1>
        {/* <Router>
        <Link to='/'>Back to Homepage</Link>
        <Routes>
        <Route exact path= '/'element={<Home/>}/>
        </Routes>
        </Router> */}
        </>
    )
}
export default Error404;