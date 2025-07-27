import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//ReactDOM.render(<App/>,document.createElement('root'));//upto 17
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); //parent component
