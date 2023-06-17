import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./routes/Layout";
import Startups from "./routes/Startups";
import Events from "./routes/Events";
import General from "./routes/General";
import StartupView from "./routes/StartupView";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<General/>}/>
                  <Route path="startups">
                      <Route index element={<Startups/>}/>
                      <Route path="*" element={<StartupView/>}/>
                  </Route>
                  <Route path="events" element={<Events/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
 