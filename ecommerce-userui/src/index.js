import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from 'react-redux'
import store from "./redux/store";

/*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
ReactDOM.render(
  <Provider store={store} >
   <App />
  </Provider>,
 document.getElementById('root'))