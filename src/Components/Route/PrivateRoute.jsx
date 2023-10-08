import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

const {user, loader} = useContext(AuthContext);

const location = useLocation();


if(loader){
    return <div className="w-full mx-auto">
        <span className="loading loading-spinner text-success"></span>
    </div>
}

if(user){
    return children;
}
 return <Navigate state={location.pathname} to="/login"></Navigate>



};

export default PrivateRoute;