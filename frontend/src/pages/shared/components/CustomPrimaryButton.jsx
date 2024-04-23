import { twMerge } from 'tailwind-merge';

const CustomPrimaryButton = ({
    label, className, disabled, onClick
}) => {
    return (<button
        // className='bg-[#5865F2] text-white text-lg font-semibold w-full h-10'
        className={twMerge(
            'bg-[#5865F2] text-white text-lg font-semibold w-full h-10',
            className
        )}
        disabled={disabled}
        onClick={onClick}
    >{label}
    </button>
    )
}

export default CustomPrimaryButton