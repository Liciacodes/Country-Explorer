
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { useState } from "react";
import CountryDetails from "./pages/CountryDetails/CountryDetails";



function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <div className= {`"bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white" ${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode}/>} />
          <Route path='/country/:alpha3Code' element={<CountryDetails/>} />  
        </Routes>
      </div>
    </BrowserRouter>
   
 
  );
}

export default App;