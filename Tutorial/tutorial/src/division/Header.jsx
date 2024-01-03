import {Link} from "react-router-dom";
import React from "react";

import "./Header.css"
import SearchRecipe from "../components/searchRecipe/SearchRecipe.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
const Header = ()=>{

    return(
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/tutorials" className="navbar-brand">
              Bicol Recipe
            </a>
            <div className="navbar-nav mr-auto">
            <li className="nav-item">
             <Link to={"/tutorials"} className="nav-link">
             Recipe
            </Link>
            </li>
            <li className="nav-item">
             <Link to={"/add"} className="nav-link">
        Add
             </Link>
             </li>
             </div>
            </nav>

        </div>
    );
};

export default Header;