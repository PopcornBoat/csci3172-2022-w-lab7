import './App.css';
import Signup from './Signup';
import Profile from './Profile';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';

function App() {
  const [info, getInfo] = useState([]);
  
  if(info.valid===true){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile props={info}/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  )}
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup getInfo={getInfo}/>}></Route>
      </Routes>
    </Router>
  );
  
}

export default App;
