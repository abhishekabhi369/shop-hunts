import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";


const RequireAuth =({allowedRoles})=>{
 
    const {auth}=useAuth()
    const location=useLocation()
    console.log(auth,"Required auth");
    return( auth?.role && allowedRoles.includes(auth.role)
       ? <Outlet />
       :
        <Navigate to={'/'} state={{from:location}} replace/>

    );
}

export default RequireAuth