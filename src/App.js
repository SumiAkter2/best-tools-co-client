import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
