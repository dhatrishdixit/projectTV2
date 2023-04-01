import React from "react";
import Home from "./components/Home";
import Summary from "./components/Summary";
import './App.css'
import { BrowserRouter,Route,Routes,Link, useParams } from "react-router-dom";
const App = () =>{
    return(
        <BrowserRouter>
   <div>
    <Routes>
    <Route path ="/" exact element ={<Home />} />
    <Route path ="/:thetvdb" exact element ={<Summary />} />
    </Routes>
    
    </div>
    
    </BrowserRouter>

    )
}

export default App;