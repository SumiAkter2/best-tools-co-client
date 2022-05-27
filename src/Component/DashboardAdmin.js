// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Route } from 'react-router-dom';
// import useAdmin from '../Hooks/UseAdmin';
// import AdminProfile from './DashBoard/AdminProfile';
// import MakeAdmin from './DashBoard/MakeAdmin';
// import ManageAllProducts from './DashBoard/ManageAllProducts';
// import ManageOrder from './DashBoard/ManageOrder';

// const DashboardAdmin = ({ children }) => {
//     const [user] = useAuthState();
//     const [admin] = useAdmin();
//     return (
//         <div>
//             {user?.email && admin ? <> <Route index element={<AdminProfile></AdminProfile>}></Route>
//                 <Route path='order' element={<ManageOrder />}></Route>
//                 <Route path='allProducts' element={<ManageAllProducts></ManageAllProducts>}></Route>
//                 <Route path='admin' element={<MakeAdmin></MakeAdmin>}>
//                 </Route></> : " "}
//             {children}
//         </div>
//     );
// };

// export default DashboardAdmin;