import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout"
import Homepage from "./components/Homepage";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Homepage/>}/>
  
  
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
