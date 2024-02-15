import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import Landing from './pages/Landing.js';
import PlantLibrary from './pages/PlantLibrary.js'
import PlantEntry from './pages/PlantEntry.js';
import CaptureScreen from './pages/CaptureScreen.js'
import CapturePhoto from './pages/CapturePhoto.js';
import Results from './pages/Results.js';

function App() {
  return (
    <ChakraProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/PlantLibrary" element={<PlantLibrary />} />
            <Route path="/PlantEntry" element={<PlantEntry />} />
            <Route path="/CaptureScreen" element={<CaptureScreen />} />
            <Route path="/CapturePhoto" element={<CapturePhoto />} />
            <Route path="/Results" element={<Results />} />

          </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;