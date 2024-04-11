import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import AuthBox from '../../shared/components/AuthBox';
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/Validators';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuthActions } from '../../../api/authApiActions';

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateRegisterForm({ email, username, password }));
    }, [email, username, password, setIsFormValid]);


    const handleRegister = () => {
        const userDetails = {
            email, username, password
        }
        console.log(email, username, password);
        console.log('Registering ...');
        getAuthActions(dispatch).register(userDetails, navigate);
    }

    return (<AuthBox>
        <Typography variant='h5' sx={{ color: 'white' }}>
            Create an Account
        </Typography>
        <RegisterPageInputs
            email={email} setEmail={setEmail}
            username={username} setUsername={setUsername}
            password={password} setPassword={setPassword}
        />
        <RegisterPageFooter
            handleRegister={handleRegister}
            isFormValid={isFormValid}
        />
    </AuthBox>
    )
}

export default RegisterPage