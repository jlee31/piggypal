import { useState } from 'react'

// Imports

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';


// Pages

import HomePage from './pages/HomePage.jsx';
import Wishlist from './pages/Wishlist.jsx';
import BudgetPlanner from './pages/BudgetPlanner.jsx';
import BigPurchases from './pages/BigPurchases.jsx';
import Stats from './pages/Stats.jsx';
import Navbar from './components/NavBar.jsx';


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
