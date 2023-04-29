import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { isUserAuthenticated } from './login/helpers/isUserAuthenticated'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className={isUserAuthenticated() ? "main-content": null}>
      <AppRouter />
    </div>
  </BrowserRouter>
)