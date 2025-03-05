
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import {  useTheme } from "./context/ThemeContext";



function App() {
const {darkMode} = useTheme()

 
  return (
  
       <BrowserRouter>
      <div className= {`"bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white" ${darkMode ? "dark" : ""}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/country/:alpha3Code' element={<CountryDetails/>} />  
        </Routes>
      </div>
    </BrowserRouter>
   
  
   
 
  );
}

export default App;