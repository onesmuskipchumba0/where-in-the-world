import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="nav-container">
      <div className="container-custom">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="text-xl font-extrabold">
            Where in the world?
          </Link>
          
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 text-sm font-semibold"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;