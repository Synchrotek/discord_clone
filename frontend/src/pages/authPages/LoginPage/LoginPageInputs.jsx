import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel'

const LoginPageInputs = ({ email, setEmail, password, setPassword }) => {
    return (<div>
        <InputWithLabel
            value={email}
            setValue={setEmail}
            label='Email'
            type='text'
            placeholder='Enter e-mail address'
        />
        <InputWithLabel
            value={password}
            setValue={setPassword}
            label='Password'
            type='password'
            placeholder='Enter your password'
        />
    </div>
    )
}

export default LoginPageInputs