import { Route, Routes } from "react-router-dom"
import Lab1 from "./Lab1"
import Lab2 from "./Lab2"
import TOC from "./TOC"

export default function Labs() {
    return(        
    <div>
        <TOC/ >
        <h1>Welcome to Web Dev!!</h1>
        <h1>Labs</h1>
        <Routes>
        <Route path="/Lab1" element = {<Lab1/>}/>
        <Route path="/Lab2" element = {<Lab2/>}/>
        </Routes>
        {/* <Lab1 />
        <Lab2 />
        <h2>Lab3</h2>
        <h2>Lab4</h2>
        <h2>Lab5</h2> */}
        </div>
    )
}   