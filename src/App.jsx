import { useState } from 'react'

// Imports

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';


// Pages

import HomePage from './components/HomePage'

// CODE

function App() {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />} />
    
  
    )
  );
  return <RouterProvider router={router} />;  
}

export default App
