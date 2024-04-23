import { logout } from '../../shared/utils/auth.utils';

const AppBar = () => {
    return (<div
        className='absolute right-0 top-0 h-13 w-[63.7%] bg-transparent flex items-center justify-end py-1 px-4'
    >
        <button onClick={logout}
            className="bg-orange-700 text-white px-4 py-1 rounded-sm text-sm hover:bg-orange-500 transition-colors font-semibold">
            Logout
        </button>
    </div>
    )
}

export default AppBar