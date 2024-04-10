import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'

const getFormNotValidMessage = () => {
    return `Enter correct e-mail address and
    Password should contain 6-12 characters`
}

const getFormValidMessage = () => {
    return 'Press to log in!';
}

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
    const navigate = useNavigate();
    const handlePushToRegister = () => {
        navigate('/register')
    }

    return (<>
        <Tooltip
            title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
            <div>
                <CustomPrimaryButton
                    label='Log in'
                    additionalStyles={{ marginTop: '30px' }}
                    disabled={!isFormValid}
                    onClick={handleLogin}
                />
            </div>
        </Tooltip>
        <RedirectInfo
            text='Need an account? '
            redirectText='Create an account'
            additionalStyles={{ marginTop: '5px' }}
            redirectHandler={handlePushToRegister}
        />
    </>
    )
}

export default LoginPageFooter