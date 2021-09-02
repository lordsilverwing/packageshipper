import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import PackageShipper from '../PackageShipper'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'


function App() {


  return (
    <div className="App">
      <PackageShipper />
    </div>
  );
}

export default App;
