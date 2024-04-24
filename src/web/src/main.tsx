import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain= "dev-ojeiei012i0fiuig.us.auth0.com"
    clientId= "51adVLdIquB9vDKuyOCQktxjModn3zmk"
    authorizationParams={{
      redirect_uri: window.location.origin
      }}
      >
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Auth0Provider>
)
