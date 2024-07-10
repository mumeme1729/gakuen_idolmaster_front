import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, 
  Route,
  Routes,
  redirect
} from "react-router-dom";

import Header from './components/ui/header/Header';
import Home from './components/ui/home/Home';
import SupportCardList from './components/ui/support_card_list/SupportCardLits'

function RoutesWrapper() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support_cards" element={<SupportCardList />} />
      </Routes>
    </>
  );
}


function App() {
  return (
    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <RoutesWrapper/>
        </BrowserRouter>
      </div>
  );
}

export default App;