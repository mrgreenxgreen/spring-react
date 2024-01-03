import React from 'react'
import ReactDOM from 'react-dom/client'


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import TutorialsList from "./components/TutorialsList.jsx";
import AddTutorial from "./components/AddTutorial.jsx";
import Tutorial from "./components/Tutorial.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/tutorials",
        element:<Home/>,
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
        path:"/add",
        element:<AddTutorial/>,
    },
    {
        path:"/tutorials/:id",
        element:<Tutorial/>,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
);


