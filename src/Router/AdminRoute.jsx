/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user, loading}= useAuth()
    const[isAdmin, isAdminLoadding]=useAdmin()
    const location = useLocation();

    if(loading || isAdminLoadding){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
   
};

export default AdminRoute;