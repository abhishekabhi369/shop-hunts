import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Layout from "./Models/Layout";

const RequireAuth =({allowedRoles})=>{
    const {auth}=useAuth()
    console.log("required auth",auth);
    const location=useLocation()

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