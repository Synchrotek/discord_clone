import React, { useEffect, useState } from 'react'
import AuthBox from '../../shared/AuthBox'
import InputWithLabel from '../../shared/InputWithLabel'
import RegisterPageFooter from './RegisterPageFooter';
import RegisterHeader from './RegisterHeader';
import { validateRegisterForm } from '../../../utils/validator';
import { getAuthActions } from '../../../api/authApiActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateRegisterForm({ username, email, password }));
    }, [username, email, password, setIsFormValid]);

    const handleRegister = () => {
        const userDetailes = {
            email, password, username
        };
        getAuthActions(dispatch).register(userDetailes, navigate);
    }

    return (
        <AuthBox>
            <RegisterHeader />
            <InputWithLabel
                value={username}
                setValue={setUsername}
                label="Username"
                type="text"
                placeholder="Enter a username"
            />
            <InputWithLabel
                value={email}
                setValue={setEmail}
                label="Email"
                type="text"
                placeholder="Enter your email ."
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label="Password"
                type="password"
                placeholder="Enter your password"
            />
            <RegisterPageFooter
                isFormValid={isFormValid}
                handleRegister={handleRegister}
            />
        </AuthBox>
    )
}

export default RegisterPage