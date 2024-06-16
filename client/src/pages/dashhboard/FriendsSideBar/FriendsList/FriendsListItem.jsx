import Avatar from '../../../shared/Avatar';

const FriendsListItem = ({
    username, id, isOnline
}) => {
    return (
        <button
            className='w-full50 h-10 mt-2 flex items-center justify-start normal-case text-white w-full relative'
        >
            <Avatar username={username} />
            <div className={`absolute top-0 h-2 w-2 rounded-3xl
            ${isOnline && 'bg-green-400'}`}
            />
            <p className='ml-2 font-bold text-'>{username}</p>
        </button>
    )
}

export default FriendsListItem