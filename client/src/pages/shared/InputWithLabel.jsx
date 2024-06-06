

const InputWithLabel = ({
    value, setValue, label, type, placeholder
}) => {
    const handleValueChnage = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="flex flex-col justify-center w-full">
            <p className="text-[#b9bbbe] uppercase font-semibold text-md">
                {label}
            </p>
            <input
                className="input h-10 focus-within:outline-none bg-slate-400 text-black placeholder:text-slate-700"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleValueChnage}
            />
        </div>
    )
}

export default InputWithLabel