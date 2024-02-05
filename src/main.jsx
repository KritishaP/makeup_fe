import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import HomeLayout from './layouts/home.layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeLayout />
  </React.StrictMode>,
)
