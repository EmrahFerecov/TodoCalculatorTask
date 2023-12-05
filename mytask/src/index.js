import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Calculator from "./App";
import Todos from "./Todos/todos";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Provider store={store}>
      <Calculator />
      {/* <Todos/> */}
    </Provider>
 
);
