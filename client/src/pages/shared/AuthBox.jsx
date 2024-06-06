const AuthBox = ({ children }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col gap-2 items-center p-10 min-h-[80%] rounded-xl border-2 shadow-xl">
                {children}
            </div>
        </div>
    )
}

export default AuthBox