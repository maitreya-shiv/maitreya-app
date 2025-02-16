import React, {Component} from "react";
import {HashRouter, Link} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AppBar from "./components/AppBar";

import './styles/App.css';

class App extends Component {
    render() {
        return (
            <div style={{height: "100%",'overflow-y': 'scroll', 'overflow-x': 'hidden', 'scrollbar-width': 'none'}}>
                <HashRouter>
                <AppBar></AppBar>                
                    <AppRoutes></AppRoutes>
                </HashRouter>
            </div>
        );
    }
}

export default App;