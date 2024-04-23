import Avatar from '../../../shared/components/Avatar'
import OnlineIndicator from './OnlineIndicator';

const FriendsListItem = ({ id, username, isOnline }) => {
    return (
        <button className='w-full h-10 mt-2 ml-2 flex items-center justify-start normal-case text-black relative'>
            <Avatar username={username} />
            <p className='text-sm ml-1 font-bold text-[#8e9297] text-left'>
                {username}
            </p>
            {isOnline && <OnlineIndicator />}
        </button>
    )
}

export default FriendsListItem