import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signinpage from './pages/signinPage';
import Navtopbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signinpage/>}/>
          <Route path="/main" element={<Navbar/>} />
         </Routes>

      </Router>
    
      
    </div>
  );
}

export default App;
