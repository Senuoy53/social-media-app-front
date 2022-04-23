import {Navigate} from 'react-router';
import {isAuthenticated} from "./apiCall/auth"

const PrivateRoute = ({ children }:any) => {
    const auth = isAuthenticated();
    return auth ? children : <Navigate to="/signin" />;
}

export default PrivateRoute