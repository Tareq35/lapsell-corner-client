import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/categoryProducts/:id',
                element: <PrivateRoute>
                    <CategoryProducts></CategoryProducts>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categoryProducts/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute>
                    <AddProduct></AddProduct>
                </SellerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute>
                    <MyProducts></MyProducts>
                </SellerRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute>
                    <AllSellers></AllSellers>
                </AdminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute>
                    <AllBuyers></AllBuyers>
                </AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute>
                    <ReportedItems></ReportedItems>
                </AdminRoute>
            },
        ]
    }
])