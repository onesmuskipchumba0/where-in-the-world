import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="bg-white dark:bg-dark-secondary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl">
            Where in the world?
          </Link>
          
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2"
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