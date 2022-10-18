import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./components/navBar";
import Cuonter from "./components/cuonter";
import Home from "./components/ourValue";
function App() {
 
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/donate" element={<Cuonter/>}/>
   </Routes>
   
   
   </BrowserRouter>
);
}

export default App;
// props for component text & function
