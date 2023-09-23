import React from "react";
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import "./App.css"

export default function App () {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  )
}