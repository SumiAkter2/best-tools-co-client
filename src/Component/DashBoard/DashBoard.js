import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/UseAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div >
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <h1>Dashboard</h1> */}
                    <Outlet></Outlet>
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side w-2/4 lg:w-full">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto  bg-base-200 text-pink-500">
                        <li><Link to="/dashboard" >My profile</Link>
                        </li>

                        {(!admin) ?
                            <>
                                <li><Link to="/dashboard/order">My Order</Link>
                                </li>
                                <li><Link to="/dashboard/review">My Review</Link></li> </> :
                            <><li><Link to="/dashboard/manageorder">Manage Order</Link>
                            </li>
                                <li><Link to="/dashboard/allProducts">Manage all Products</Link>
                                </li>
                                <li><Link to="/dashboard/addProducts">Add A Products</Link>
                                </li>
                                <li><Link to="/dashboard/admin">Make a admin </Link></li></>}
                        {/* <li><Link to="/dashboard/profile">My Profile</Link></li> */}


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default DashBoard;