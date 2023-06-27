import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home/App'
import Success from './Success/success'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/Success' element={<Success />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
