import React, {useState} from 'react'
import { useEffect } from 'react';
import './App.css';
import tickets from './flights.json'
import Ticket from  './components/Ticket/Ticket.js'
import {useStore} from "react-redux";
import store from "./redux/ReduxStore";
import {Provider} from "react-redux";
import MainComponent from "./components/MainCompot/MainComponent";

function App() {

  return (
      <Provider store={store}>
        <div className="App">
          <MainComponent/>
        </div>
      </Provider>
  );
}

export default App;
