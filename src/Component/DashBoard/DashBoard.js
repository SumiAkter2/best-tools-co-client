import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div >
            <div class="drawer drawer-end  ">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1>Dashboard</h1>
                    <Outlet></Outlet>
                    <label for="my-drawer-4" class="drawer-button btn btn-primary mt-12">Open drawer</label>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-4" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

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