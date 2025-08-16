import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import myReduxStore from './redux/store/Store.js'



//ReactDOM.render(<App/>,document.createElement('root'));//upto 17
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={myReduxStore}>
        <App/>
    </Provider>
    </BrowserRouter>
); //parent component
