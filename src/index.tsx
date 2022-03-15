import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthorQuote from './Pages/AuthorQuote';
import Footer from './components/Footer';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/author/:author' element={<AuthorQuote/>}/>
      </Routes>
      <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);
