
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
   
 
  );
}

export default App;