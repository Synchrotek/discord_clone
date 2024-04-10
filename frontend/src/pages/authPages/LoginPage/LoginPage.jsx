import React, { useEffect, useState } from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../shared/utils/Validators';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({ email, password }));
    }, [email, password, setIsFormValid]);

    const handleLogin = () => {
        console.log(email, password);
        console.log('Log in');
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