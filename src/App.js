
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Component/Blogs';

import LogIn from './Component/LogIn';

import Footer from './Component/Footer';
import Summary from './Component/Summary';
import SignIn from './Component/SignIn';
import RequireAuth from './Component/RequireAuth';

import NotFound from './Component/NotFound';
import DashBoard from './Component/DashBoard/DashBoard';
import MyProfile from './Component/DashBoard/MyProfile';
import MyOrder from './Component/DashBoard/MyOrder';
import AddReview from './Component/DashBoard/AddReview';
import ProductDetails from './Component/ProductDetails';
import MyPortfolio from './Component/MyPortfolio';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAdmin from './Hooks/UseAdmin';
// import AdminProfile from './Component/DashBoard/AdminProfile';
import ManageAllProducts from './Component/DashBoard/ManageAllProducts';
import MakeAdmin from './Component/DashBoard/MakeAdmin';
import ManageOrder from './Component/DashBoard/ManageOrder';
import AddProducts from './Component/DashBoard/AddProducts';
import UpdateProfile from './Component/DashBoard/UpdateProfile';


function App() {
  const [admin] = useAdmin();
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='blogs' element={<Blogs></Blogs>}></Route>
          <Route path='login' element={<LogIn></LogIn>}></Route>
          <Route path='signin' element={<SignIn></SignIn>}></Route>
          <Route path='myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='products/:productId' element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }></Route>

          <Route path='dashboard' element={<RequireAuth><DashBoard /></RequireAuth>}>
            <Route path='order' element={<MyOrder />}></Route>
            <Route path='manageorder' element={<ManageOrder />}></Route>
            <Route path='allProducts' element={<ManageAllProducts></ManageAllProducts>}></Route>
            <Route path='addProducts' element={<AddProducts></AddProducts>}></Route>
            <Route path='admin' element={<MakeAdmin></MakeAdmin>}>
            </Route> <Route index element={<MyProfile>

            </MyProfile>}></Route>
            <Route path='updateprofile' element={<UpdateProfile></UpdateProfile>}></Route>
            <Route path='review' element={<AddReview></AddReview>}>
            </Route>
          </Route>
          <Route path='summary' element={<Summary />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
