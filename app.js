import React from "react"
import ReactDOM from "react-dom/client"


const Title=()=>(
    <h1 className="head">
        Namaste from jsx
    </h1>
)

const HeadingComponent=()=>(
    <div className="constainer">
        <Title/>
        <h1 className="heading">
            Namaste from functional component
        </h1>
    </div>


)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)
