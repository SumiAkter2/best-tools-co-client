import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Component/Blogs';
import Reviews from './Component/Reviews';
import LogIn from './Component/LogIn';
import Tools from './Component/Tools';
import Footer from './Component/Footer';
import Summary from './Component/Summary';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/blgs' element={<Blogs></Blogs>}></Route>
          <Route path='/login' element={<LogIn></LogIn>}></Route>
          <Route path='/tools' element={<Tools />}></Route>
          <Route path='/summary' element={<Summary />}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>

    </div>
  );
}

export default App;
