import { Navigate, Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Master(){
    const token=sessionStorage.getItem("token")
    if(!token){
        return <Navigate to={"/"}/>
    }
    return(
        <>
        <Header/>
        <Sidebar/>
        <Outlet/>  {/*it calls the slave component/child components */}
        <Footer/>
        </>
    )
}