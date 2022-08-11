import React from 'react'
import App from './App'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Error from './Error404'
function home(){
    return(
    <>
    <Router>
        {/* <Link to="/"></Link> */}
        <Routes>
            <Route exact path= '/'element={<App/>}/>
            <Route exact path='*' element={<Error/>} />
        </Routes>
    </Router>
    </>
    );
}
export default home;