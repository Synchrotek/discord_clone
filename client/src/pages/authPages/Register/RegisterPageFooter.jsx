import { Link } from 'react-router-dom'

const RegisterPageFooter = ({ isFormValid, handleRegister }) => {
    return (
        <div className='w-full mt-2 space-y-2 text-center'>
            <button className='bg-orange-600 hover:bg-orange-500 transition-colors text-white w-full p-3 rounded-lg disabled:bg-black disabled:text-zinc-600 tooltip'
                data-tip={"errMessage"}
                disabled={!isFormValid}
                onClick={handleRegister}
            >
                Register
            </button>
            <p>
                <span>Already have an account?&nbsp;</span>
                <Link className='hover:underline italic text-orange-200'
                    to='/login'>Log in
                </Link>
            </p>
        </div>
    )
}

export default RegisterPageFooter