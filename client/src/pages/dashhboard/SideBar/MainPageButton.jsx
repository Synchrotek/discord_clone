import React from 'react'
import { MdGroups } from "react-icons/md";

const MainPageButton = () => {
    return (
        <button className='
        w-12 h-12 rounded-2xl bg-[#AF47D2] my-2 text-white flex justify-center items-center hover:bg-opacity-50 transition-all active:bg-blue-500
        '>
            <MdGroups size={20} />
        </button>
    )
}

export default MainPageButton