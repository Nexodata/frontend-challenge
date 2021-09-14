import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/' component={Home} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
