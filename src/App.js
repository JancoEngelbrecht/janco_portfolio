import {Route, Routes} from "react-router-dom"
import Home from './pages/homepage';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
