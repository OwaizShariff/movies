import React from 'react';
import Header from './Components/Header';
import Main from "./Components/Main"
import Layout from "./Components/Layout";
import Routes from "./Components/Routes";

// import  Layout from "./Components/Layout";
function index() {
  return <div>
  <Header/>
  <Main />
  <Layout />
  
  <Routes/>
  </div>;
}

export default index;
