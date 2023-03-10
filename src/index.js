import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Navbar from "./components/navbar/navbar";
import RequestCard from "./components/request-card-component/requestCard";
import AcceptedCard from "./components/accepted/Accepted";
import Denied from "./components/denied/Denied";
import Navbar from "./components/navbar/navbar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RequestCard /> */}
    {/* <AcceptedCard /> */}
    {/* <Denied /> */}
    <Navbar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
