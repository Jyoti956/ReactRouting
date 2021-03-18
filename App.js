/****************index.js begin***********************/

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App/> ,document.getElementById("root"));

/*****************index.js ends*******************/

/*********************App.js begin*********************/
import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import "./form.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
  } from "react-router-dom";


function App(){
    
    return(
      <Router> 
        <div className="App" >
        <nav id="navbar">
          <ul>
              <li><Link to="/">Home</Link> </li> 
              <li><Link to="/about">About Us</Link></li> 
              <li><Link to="/contact">Contact Us</Link> </li> 
          </ul>
          </nav>
    <Switch> 
            <Route exact path='/' component={Home}></Route> 
            <Route exact path='/about' component={About}></Route> 
            <Route exact path='/contact' component={Contact}></Route> 
    </Switch>   
           </div> 
       </Router> 
    );
    }
    export default App;
     
    
/*************************App.js ends****************/

/***********************Home.js begin**************/

import React, { Component } from 'react';


export default class Home extends Component {
    

    render() {

        return (
            
               <div className="div1">
                <h1 id="homeh1">This is Home page</h1>
                <div id="imgd">
                <img src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" alt="randomImage"/>
                </div>
                <div id="para1">
                <p>Coding, in simpler terms, is the language used by computers to understand our commands and, therefore, process our requests.

                Programming is a list of codes arranged in a sequence that results in the completion of work.

                Take, for example, the following analogy - you click on a video app on your smartphones, and it plays a video.

                A program is what brings about the completion of the task 'playing the said video.'

                The program is made up of a series of smaller tasks that direct your smartphone to do the above task and bring it to completion. Each smaller task is written in code, i.e., the computer language, and that is what coding is all about.</p>
                </div>
                </div>

            
        );
    }
}

/************************Home.js ends***************/
/**************************About.js begins***********/
import React, { Component } from 'react'

export default class About extends Component {
    
    render() {
        return (
            <>
            <h1 id="Ab1">This is About-Us page</h1>
            </>
        );
    }
}
/*************************About.js ends*************/
/*************************ContactUs.js begin******************/
import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1 id="Co1">This is Contact-Us page</h1>
                <p>Email us with any questions or queries or call 518-234-567-098.
                 We would be happy to answer your questions and setup a meeting with you.</p>
            </div>
        )
    }
}
**************************Contactus.js ends********************/
