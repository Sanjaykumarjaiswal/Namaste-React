import React from "react"
import ReactDOM from "react-dom/client"

//react element

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "This is Sanjay⭐️"
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)