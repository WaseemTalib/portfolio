import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import home from './component/landing'



class App extends Component {
  componentDidMount = () => {
    document.getElementById("loader").classList.add('hideLoader')
  }

  render() {
    return (
      <BrowserRouter>

        <Route exact path="/" component={home} />
        <Route path='/transfers' component={() => {
          window.location.replace('http://waseem-transfers.web.app/');
          return null;
        }} />
        
        <Route path='/natours' component={() => {
          window.location.replace('https://waseemtalib.github.io/natours/');
          return null;
        }} />
        <Route path='/trillo' component={() => {
          window.location.replace('https://waseemtalib.github.io/Trillo/');
          return null;
        }} />
        <Route path='/bookcon' component={() => {
          window.location.replace('https://waseemtalib.github.io/BookCon/');
          return null;
        }} />
        <Route path='/budgety' component={() => {
          window.location.replace('https://waseemtalib.github.io/Budgety/');
          return null;
        }} />
        <Route path='/dice-game' component={() => {
          window.location.replace('https://waseemtalib.github.io/dice-game/');
          return null;
        }} />
        <Route path='/drum-kit' component={() => {
          window.location.replace('https://waseemtalib.github.io/drum-kit/');
          return null;
        }} />
        <Route path='/psd' component={() => {
          window.location.replace('https://waseemtalib.github.io/psd/');
          return null;
        }} />
        <Route path='/simon-game' component={() => {
          window.location.replace('https://waseemtalib.github.io/simon-game/');
          return null;
        }} />
        <Route path='/social-feed' component={() => {
          window.location.replace('https://waseemtalib.github.io/social-feed/');
          return null;
        }} />

      </BrowserRouter>);
  }


}

export default App;



