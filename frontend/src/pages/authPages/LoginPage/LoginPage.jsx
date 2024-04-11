import React, { useEffect, useState } from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../shared/utils/Validators';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuthActions } from '../../../api/authApiActions'

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('sam1@gmaill.com');
    const [password, setPassword] = useState('123456');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({ email, password }));
    }, [email, password, setIsFormValid]);

    const handleLogin = () => {
        const userDetails = {
            email, password
        }
        console.log(email, password);
        console.log('Logging in ...');
        getAuthActions(dispatch).login(userDetails, navigate);
    }

    return (
        <AuthBox>
            <LoginPageHeader />
            <LoginPageInputs
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
            <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
        </AuthBox>
    )
}

export default LoginPage