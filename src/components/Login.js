import React from 'react'
import { useHistory, Redirect } from 'react-router-dom'

const Login = () => {

    let hist = useHistory();

    const onSubmit = () => {
        hist.push('/dashboard');
    }

    return(
        <button onClick={onSubmit}>Log on</button>
    )
}

export default Login