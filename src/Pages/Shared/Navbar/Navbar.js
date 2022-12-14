import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error));
    }
    const menuItems = <>
        <li><Link to="/" className='rounded-lg' >Home</Link></li>
        <li><Link to="/blogs" className='rounded-lg' >Blogs</Link></li>
        {
            user?.uid ?
                <>
                    {isAdmin ?
                        <li><Link to="/dashboard/allSellers">Dashboard</Link></li>
                        :
                        <>
                            {isSeller ?
                                <li><Link to="/dashboard/addProduct">Dashboard</Link></li>
                                :
                                <li><Link to="/dashboard">Dashboard</Link></li>}
                        </>}

                    <li><button onClick={handleLogOut}>Sign Out</button></li>
                </>
                :
                <>
                    <li><Link to="/login" className='rounded-lg' >Login</Link></li>
                    <li><Link to="/signup" className='rounded-lg' >Sign up</Link></li>
                </>
        }
    </>
    return (
        <div>
            <div className="navbar bg-blue-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-200 rounded-box w-52 text-lg font-semibold">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="font-bold normal-case text-3xl ml-3"><span className='text-yellow-500'>LapSell</span>Corner</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-lg font-semibold">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;