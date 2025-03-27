import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./common/layout";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import AboutMe from "./pages/aboutme";
import PageTitle from "./components/PageTitle";
import NotFound from "./pages/notfound";

export default function Router() {
  return (
    <BrowserRouter>
      <PageTitle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
