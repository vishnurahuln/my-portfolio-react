import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useEffect, useState, useRef } from 'react';
import BIRDS from './data/birds.json';
import * as THREE from 'three';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

