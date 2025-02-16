import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from './context/Authcontext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    
         <App /> 
     
    </AuthProvider>
  </StrictMode>,
)
