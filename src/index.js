import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { $checkTerminal } from './common'
// import App from './App';
import * as serviceWorker from './serviceWorker';

if($checkTerminal()){
  import('./App').then(res => {
    let App=res.default
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
  })
}else{
  import('./PCApp').then(res => {
    let App=res.default
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
  })
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
