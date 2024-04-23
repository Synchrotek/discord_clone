

const Avatar = ({ username, large }) => {
    return (
        <div className={`
        bg-[#5865f2] rounded-3xl text-xl font-bold ml-1 
        flex items-center justify-center text-white 
        ${large ? 'h-20 w-20' : 'h-10 w-10'}`
        }>
            {username.substring(0, 2)}
        </div>
    )
}

export default Avatar