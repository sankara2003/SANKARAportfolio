import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/themecontext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className={`toggle-thumb ${isDarkMode ? 'dark' : 'light'}`}>
          {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
