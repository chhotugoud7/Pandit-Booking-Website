import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider, { AdminContext } from './context/adminContext.jsx'
import PanditContextProvider from './context/PanditContext.jsx'
import AppContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <PanditContextProvider>
        <AppContextProvider>

          <App />
          
        </AppContextProvider>
      </PanditContextProvider>
    </AdminContextProvider>
  </BrowserRouter>,
)
