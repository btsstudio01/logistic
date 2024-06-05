import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";



const ProtectedRoute = ({
    // user,
    redirectPath = '/',
    children,
}) => 
  
{   const statess = useSelector(state => state.counter.token)
    if (!statess) {
        return <Navigate to={redirectPath} replace />;
    }
    return children;
};

export default ProtectedRoute;