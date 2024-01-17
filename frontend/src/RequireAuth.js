import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Layout from "./Models/Layout";
import { useEffect } from "react";

const RequireAuth =({allowedRoles})=>{
    const location=useLocation()
    const [auth]=useAuth()
    console.log("required auth",auth);
    
    console.log("auth in RequireAuth:", auth.role)
    console.log("allowedRoles:", allowedRoles);
    useEffect (() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
      }, []);
    
    return (
     
        auth?.role?.find(role => allowedRoles?.includes(role))
        // auth?.role==='Admin' || "Consumer" || "Store"
        ?<Layout/>
        :<Navigate to={'/unauthorize'} state={{from:location}} replace/>
            //  :<Navigate to={'/signin'} state={{from:location}} replace/>

        // auth?.Email
        // ?<Outlet/>
        // :<Navigate to={'/signin'} state={{from:location}} replace/>
    );
}

export default RequireAuth