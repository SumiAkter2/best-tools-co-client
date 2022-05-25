import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home';
import { Outlet, Route, Routes } from 'react-router-dom';
import Blogs from './Component/Blogs';

import LogIn from './Component/LogIn';
import Tools from './Component/Tools';
import Footer from './Component/Footer';
import Summary from './Component/Summary';
import SignIn from './Component/SignIn';
import RequireAuth from './Component/RequireAuth';
import Products from './Component/Products';
import NotFound from './Component/NotFound';
import DashBoard from './Component/DashBoard/DashBoard';
import MyProfile from './Component/DashBoard/MyProfile';
import MyOrder from './Component/DashBoard/MyOrder';
import AddReview from './Component/DashBoard/AddReview';
import ProductDetails from './Component/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          {/* <Route path='/reviews' element={<Reviews></Reviews>}></Route> */}
          <Route path='blogs' element={<Blogs></Blogs>}></Route>

          <Route path='login' element={<LogIn></LogIn>}></Route>
          <Route path='signin' element={<SignIn></SignIn>}></Route>
          {/* <Route path='tools' element={

            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }></Route> */}

          <Route path='products/:productId' element={

            <RequireAuth>

              <ProductDetails></ProductDetails>
            </RequireAuth>
          }></Route>

          <Route path='dashboard' element={<RequireAuth><DashBoard /></RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='order' element={<MyOrder />}></Route>
            <Route path='review' element={<AddReview></AddReview>}></Route>
          </Route>
          <Route path='summary' element={<Summary />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>

    </div>
  );
}

export default App;
