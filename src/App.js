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
import SignIn from './Component/SignIn';
import RequireAuth from './Component/RequireAuth';
import Purchase from './Component/Navbar/Purchase';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/login' element={<LogIn></LogIn>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/tools' element={

            <RequireAuth>
              <Tools />
            </RequireAuth>
          }></Route>
          <Route path='/purchase' element={

            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }></Route>
          <Route path='/summary' element={<Summary />}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>

    </div>
  );
}

export default App;
