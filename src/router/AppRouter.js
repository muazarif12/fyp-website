import Dashboard from "../Dashboard";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


const AppRouter = () => {
    return(
        <Router>

            <Dashboard/>
        </Router>
        

    );
} ;

export default AppRouter;