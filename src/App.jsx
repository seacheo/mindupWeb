import React from 'react';
import Navbar from "./pages/Shared/Navbar.jsx"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './pages/Landing/Landing.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Research from './pages/Research/Research.jsx'


import './App.less';

function App() {
  return (
    <div style={{height: "100vh", width: "100vw", background: "#fafafa", overflowX: "hidden"}}>
      <Router>
        <div style={{ margin: "0px auto"}}>
        <Navbar/>
        <Switch>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/research" component={Research}/>
          <Route path="/" component={Landing}/>
        </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
