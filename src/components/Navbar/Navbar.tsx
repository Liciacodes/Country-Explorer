import { FaMoon, FaSun} from "react-icons/fa";


interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void
}
const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {

  return (

    <nav className={`flex justify-between items-center px-12 py-8 shadow-md nunito ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} dark:bg-[hsl(209,23%,22%)] dark:text-white`}>
      <h1 className="text-xl font-bold">Where in the world?</h1>
      <button onClick={() => setDarkMode(!darkMode)} className="flex items-center gap-2">        {darkMode ? <FaMoon className="text-gray-500" size={20} /> : <FaSun className="text-yellow-500" size={20} />}
        {darkMode ? ' Dark Mode' : "Light Mode"}</button>
    </nav>
  )
}

export default Navbar;