import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./routes/Layout";
import Startups from "./routes/Startups";
import Events from "./routes/Events";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route path="startups" element={<Startups/>}/>
                  <Route path="events" element={<Events/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
 