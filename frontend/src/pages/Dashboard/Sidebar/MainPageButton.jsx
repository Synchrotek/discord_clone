import Button from '@mui/material/Button'
import { FaUserGroup } from "react-icons/fa6";

const MainPageButton = () => {
    return (
        <button
            className='w-10 h-10 rounded-2xl m-0 p-0 min-w-0 mt-2 text-white bg-[#5865F2] flex justify-center items-center text-lg hover:bg-blue-500 transition-all'
        >
            <FaUserGroup />
        </button>
    )
}

export default MainPageButton