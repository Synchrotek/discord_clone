
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthBox from '../../shared/AuthBox';
import InputWithLabel from '../../shared/InputWithLabel';
import LoginHeader from './LoginHeader';
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../../utils/validator';
import { getAuthActions } from '../../../api/authApiActions';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({ email, password }));
    }, [email, password, setIsFormValid]);

    const handleLogin = () => {
        const userDetailes = {
            email, password
        };
        getAuthActions(dispatch).login(userDetailes, navigate);
    }

    return (
        <AuthBox>
            <LoginHeader />
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
            <LoginPageFooter
                isFormValid={isFormValid}
                handleLogin={handleLogin}
            />
        </AuthBox>
    )
}

export default LoginPage