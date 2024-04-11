import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';

const getFormNotValidMessage = () => {
    return `Enter correct e-mail address &
    Username should contain 6-12 characters &
    Password should contain 6-12 characters `
}

const getFormValidMessage = () => {
    return 'Press to register!';
}

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
    const navigate = useNavigate();
    const handlePushToLogin = () => {
        navigate('/login')
    }

    return (<>
        <Tooltip
            title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
            <div>
                <CustomPrimaryButton
                    label='Register'
                    additionalStyles={{ marginTop: '20px' }}
                    disabled={!isFormValid}
                    onClick={handleRegister}
                />
            </div>
        </Tooltip>
        <RedirectInfo
            text=''
            redirectText='Already have an account? '
            additionalStyles={{ marginTop: '5px' }}
            redirectHandler={handlePushToLogin}
        />
    </>
    )
}

export default RegisterPageFooter