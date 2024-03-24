import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route  } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExamplesPage from './components/ExamplesPage';
import AboutPage from './components/AboutPage';
//import Navbar from './components/Navbar'
function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/examples" element={<ExamplesPage />} />
        {/* <Route path="/navbar" element={<Navbar/>} /> */}
    </Routes>
  )
}

export default App
