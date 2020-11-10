import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Yoga from './components/pages/Yoga';
import Nutrition from './components/pages/Nutrition';
import PlantBlog from './components/pages/PlantBlog';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/yoga' component={Yoga} />
          <Route path="/nutrition" component={Nutrition} />
          <Route path="/plant-blog" component={PlantBlog} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
