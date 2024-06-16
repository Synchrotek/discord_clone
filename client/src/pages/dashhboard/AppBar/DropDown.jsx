import { MdOutlineMoreVert } from "react-icons/md";
import { logout } from '../../../utils/auth';

const DropDown = () => {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1 hover:bg-slate-700">
                <MdOutlineMoreVert size={22} />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><button
                    onClick={logout}
                >Logout</button></li>
            </ul>
        </div>
    )
}

export default DropDown