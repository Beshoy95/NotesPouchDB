import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
        <>
         <nav className="navbar">
             <h1><Link to="/">ReactNotes</Link></h1>
             <div className="navbar-buttons">
                 <Link to="/new" className="btn">new note</Link>
             </div>
         </nav>
        </> );
    }
}
 
export default Navbar;