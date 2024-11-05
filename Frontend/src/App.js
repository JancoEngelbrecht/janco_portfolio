import {Route, Routes} from "react-router-dom"

import Home from './pages/homepage';
import Contact from "./pages/contactpage";
import Projects from "./pages/projectspage";
import Layout from "./components/pagelayout";
import Playground from "./pages/playgroundpage";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/playground" element={<Playground />} />
      </Route>
    </Routes>
  );
}

export default App;
