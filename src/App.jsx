import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CountryInfo from './pages/CountryInfo';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:id" element={<CountryInfo />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
