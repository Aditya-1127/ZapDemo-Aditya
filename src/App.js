import React, { useEffect, useState } from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Cart from './components/Cart'
import Navbar from './components/Navbar';
import DropdownExampleSelection from './components/Sortdown';
import { Dropdown } from 'semantic-ui-react';



const categories = [
  {
    id: 1,
    name: 'Whisky'
  },
  {
    id: 2,
    name: 'Beer',
  },
  {
    id: 3,
    name: 'Gin',
  },
  {
    id: 4,
    name: 'Vodka',
  },
];

// const categories = [
//   {
//       "_id": 1,
//       "name": "Whisky"

//   },
//   {
//       "_id": 2,
//       "name": "Gin"
//   },
//   {

//       "_id": 3,
//       "name": "Beer"
//   },
//   {

//       "_id": 4,
//       "name": "Vodka"
//   },
//   {

//       "_id": 5,
//       "name": "Rum"
//   },
// ]

// const [data, setData] = useState([]);
// const sortArray = type => {
//   const types = {
//     categories: 'categories'
//   };
//   const sortProperty = types[type];
//   const sorted = [...categories].sort((a, b) => b[sortProperty] - a[sortProperty]);
//   console.log(sorted);
//   setData(sorted);
// };

{/* <DropdownExampleSelection onChange={(e) => sortArray(e.target.value)}/> */}



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      {/* <DropdownExampleSelection/> */}
      <Switch>
        <Route path ='/' exact component = {Home}/>
        <Route path ='/services' component = {Services} />
        <Route path ='/products' component = {Products} />
        <Route path="/cart" component={Cart}/>
        <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
         
           
            <Route path="/sign-up" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
          
        </div>
      </div>
    </div>
       
      </Switch>
      </Router>
    </>
  );
}

export default App;
