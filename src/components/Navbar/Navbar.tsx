
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";



const Navbar: React.FC = () => {
const {darkMode, toggleDarkMode} = useTheme()

  return (
    <nav
      className={`flex justify-between items-center px-6 sm:px-12 py-8 shadow-lg nunito transition-all duration-300 
        ${darkMode 
          ? "bg-[hsl(209,23%,22%)] text-white"  
          : "bg-[hsl(0,0%,100%)] text-[hsl(200,15%,8%)]"  
        }`}
    >
      <h1 className="text-xl font-bold">Where in the world?</h1>
      <button
       onClick={toggleDarkMode}
        className="flex items-center gap-2 transition-all duration-300"
      >
        {darkMode ? (
          <FaMoon className="text-gray-300" size={20} />
        ) : (
          <FaSun className="text-yellow-500" size={20} />
        )}
        {darkMode ? " Dark Mode" : " Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
