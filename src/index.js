import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/* Cutom Dummy API
================== */
import { MESSAGE_INFO } from "./api/api";
import { PRODUCTS } from "../api/api";

/* Cutom React Components
========================= */
import Chat from "./components/Chat";
import BestSellers from "./components/BestSellers";

function App() {
  /* 
  # Instructions :
  ================
  * Uncomment the component you want to display.
  * Make sure to display one component at a time for better experience.

  */

  return (
    <>
      {/* <Chat messageInfo={MESSAGE_INFO} /> */}
      <BestSellers data={PRODUCTS} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("container"));
