import React from 'react'

const Avatar = ({ username, large }) => {
    return (
        <div className={`${large ? 'h-16 w-16' : 'h-8 w-8'}
        bg-[#5856f2] rounded-md flex items-center justify-center text-xl font-bold ml-1 text-white`}
        >{username.substring(0, 2)}
        </div>
    )
}

export default Avatar