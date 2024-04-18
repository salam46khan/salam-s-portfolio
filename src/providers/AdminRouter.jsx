import { Navigate } from "react-router-dom";
import useIdentity from "../hooks/useIdentity";
import PropTypes from 'prop-types';

const AdminRouter = ({children}) => {
    const [identity] = useIdentity()
    if(identity[0]?.isAdmin){
        return children
    }
    return <Navigate to={'/'}></Navigate>
};

AdminRouter.propTypes = {
    children: PropTypes.any
}

export default AdminRouter;