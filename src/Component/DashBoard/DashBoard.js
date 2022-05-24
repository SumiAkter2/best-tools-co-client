import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div >
            <div className="drawer drawer-end  ">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1>Dashboard</h1>
                    <Outlet></Outlet>
                    <label for="my-drawer-4" className="drawer-button btn btn-primary mt-12">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to="/dashboard/order">My Order</Link>
                        </li>
                        <li><Link to="/dashboard" >My profile</Link>
                        </li>
                        <li><Link to="/dashboard/review">My Review</Link></li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default DashBoard;