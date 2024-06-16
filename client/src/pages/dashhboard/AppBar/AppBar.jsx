import DropDown from './DropDown';

const AppBar = () => {
    return (<div className='absolute right-0 top-0 h-12 border-b-[1px] bg-[#36393F] w-[calc(100%-296px)] flex items-center justify-between px-4'>
        <div />
        <div>
            <DropDown />
        </div>
    </div>
    )
}

export default AppBar