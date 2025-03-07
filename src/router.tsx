import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./common/layout"
import Home from "./pages/home"
import Projects from "./pages/Projects"
import Technologies from "./pages/Technologies"
import AboutMe from "./pages/aboutme"

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/aboutme" element={<AboutMe />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/technologies" element={<Technologies />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}