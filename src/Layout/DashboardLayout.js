import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-blue-100 m-5 rounded">

                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/addaproduct">Add a Product</Link></li>
                        <li><Link to="/dashboard/myproducts">My Products</Link></li>
                        <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                        <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                        <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
                        
                        {/* {
                            isAdmin && <>
                            </>
                        } */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;