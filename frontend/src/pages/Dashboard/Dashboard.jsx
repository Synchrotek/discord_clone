import { styled } from '@mui/system';
import FriendsSidebar from './FriendsSidebar/FriendsSidebar';
import Messenger from './Messenger/Messenger';
import Sidebar from './Sidebar/Sidebar';
import AppBar from './AppBar/AppBar';
import { useEffect } from 'react';
import { logout } from '../shared/utils/auth.utils';
import { useDispatch } from 'react-redux';
import { getAuthActions } from '../../api/authApiActions';

const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    margin: '0',
    backgroundColor: '#36393f',
})

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const userDetails = localStorage.getItem('user');

        if (!userDetails) {
            logout();
        } else {
            getAuthActions(dispatch).setUserDetails(userDetails);
        }
    }, [])

    return (<Wrapper>
        <Sidebar />
        <FriendsSidebar />
        <Messenger />
        <AppBar />
    </Wrapper>
    )
}

export default Dashboard