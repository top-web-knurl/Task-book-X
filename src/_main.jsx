import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './utils/ErrorBoundary';
import './samples/node-api'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
