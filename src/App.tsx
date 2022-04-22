import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
const App = ():JSX.Element => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutMe />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="skills" element={<Skills />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App