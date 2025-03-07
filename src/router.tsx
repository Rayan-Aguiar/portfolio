import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Projects from "./pages/Projects"
import  Technologies from "./pages/Technologies"
import { Layout } from "./common/layout"

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}/>,
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/technologies" element={<Technologies />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}