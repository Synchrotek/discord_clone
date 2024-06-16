import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { useEffect } from 'react';
import { logout } from '../../utils/auth';
import { getAuthActions } from '../../api/authApiActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { connectWithSocketServer } from '../../socketCommunication/socketConn';

const Dahsboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const userDetails = localStorage.getItem("user");
        if (!userDetails) {
            logout();
        } else {
            const userDetailsParsed = JSON.parse(userDetails);
            getAuthActions(dispatch).setUserDetails(userDetailsParsed, navigate);
            connectWithSocketServer(userDetailsParsed);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<div className='w-full h-screen flex overflow-y-hidden'>
        <SideBar />
        <FriendsSideBar />
        <Messenger />
        <AppBar />
    </div>
    )
}

export default Dahsboard