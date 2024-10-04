import {Route, Routes} from "react-router-dom"

import Home from './pages/homepage';
import Contact from "./pages/contactpage";
import Layout from "./components/pagelayout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
      </Route>
    </Routes>
  );
}

export default App;
