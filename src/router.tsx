import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Projects from "./pages/Projects"

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>,
                <Route path="/projects" element={<Projects />}/>
            </Routes>
        </BrowserRouter>
    )
}