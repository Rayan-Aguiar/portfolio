import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Projects from "./pages/Projects"
import  Technologies from "./pages/Technologies"

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>,
                <Route path="/projects" element={<Projects />}/>
                <Route path="/technologies" element={<Technologies />}/>
            </Routes>
        </BrowserRouter>
    )
}