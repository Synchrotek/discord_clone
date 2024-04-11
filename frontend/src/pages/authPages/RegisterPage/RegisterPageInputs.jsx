import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel'

const RegisterPageInputs = ({
    email, setEmail, username, setUsername, password, setPassword
}) => {

    return (
        <>
            <InputWithLabel
                value={email}
                setValue={setEmail}
                label='E-mail address'
                type='text'
                placeholder='Enter email address'
            />
            <InputWithLabel
                value={username}
                setValue={setUsername}
                label='Username'
                type='text'
                placeholder='Enter a username'
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label='Password'
                type='password'
                placeholder='Enter password'
            />

        </>
    )
}

export default RegisterPageInputs