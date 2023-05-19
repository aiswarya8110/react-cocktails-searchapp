import './App.css';
import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import { Switch, Route } from 'react-router-dom';
import HomePageComponent from './pages/HomePageComponent';
import AboutPageComponent from './pages/AboutPageComponent';
import SingleCocktailPageComponent from './pages/SingleCocktailPageComponent';
import ErrorPageComponent from './pages/ErrorPageComponent';



class App extends React.Component{
  render(){
    return <>
      <NavbarComponent/>
      <Switch>
        <Route exact path="/">
            <HomePageComponent/>
          </Route>
          <Route path="/about">
            <AboutPageComponent/>
          </Route>
          <Route path="/cocktail/:cocktailId">
            <SingleCocktailPageComponent/>
          </Route>
          <Route path="*">
            <ErrorPageComponent/>
          </Route>
      </Switch>
    </>
}  
}

export default App;

