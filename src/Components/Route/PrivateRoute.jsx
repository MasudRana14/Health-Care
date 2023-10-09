import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; 

const PrivateRoute = ({children}) => {

const {user, loader} = useContext(AuthContext);

const location = useLocation();


if(loader){
    return <div className="flex justify-center mx-auto">
        <span className="loading loading-spinner text-success"></span>
    </div>
}

if(user){
    return children;
}
 return <Navigate state={location.pathname} to="/login"></Navigate>



};

PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired
}

export default PrivateRoute;