import { Navigate, Outlet } from "react-router-dom";

import Footer from "./Footer";


import Header from "./header";
import UserSidebar from "./UserSidebar";
import UserHeader from "./Userheader";

export default function UserMaster(){
    const token=sessionStorage.getItem("Emptoken")
    if(!token){
        return <Navigate to={"/User"}/>
    }
    return(
        <>
        <UserHeader/>
        <UserSidebar/>
        <Outlet/>
        <Footer/>
        </>
    )
}