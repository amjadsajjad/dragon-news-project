import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    // useLocation hook to solve directing to a particular private route
    const location = useLocation()
    console.log(location);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
    
};
PrivateRoutes.propTypes = {
    children:PropTypes.node
}

export default PrivateRoutes;