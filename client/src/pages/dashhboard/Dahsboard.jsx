import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';

const Dahsboard = () => {
    return (<div className='w-full h-screen flex'>
        <SideBar />
        <FriendsSideBar />
        <Messenger />
        <AppBar />
    </div>
    )
}

export default Dahsboard