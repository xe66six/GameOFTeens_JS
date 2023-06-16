import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./routes/Layout";
import Startups from "./routes/Startups";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route path="startups" element={<Startups/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
