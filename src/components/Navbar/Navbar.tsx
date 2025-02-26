import { useState } from "react";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
   
    <nav className={`flex justify-between items-center p-8 shadow-md nunito ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} dark:bg-[hsl(209,23%,22%)] dark:text-white`}>
      <h1 className="text-xl font-bold">Where in the world?</h1>
      <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? '🌙 Dark Mode' : "Light Mode"}</button>
    </nav>
  )
}

export default Navbar;