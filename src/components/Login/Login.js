import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <div className='container'>
            <h1 className='buku'>Simple Login Form</h1>
            <div className='formAriya'>
                <form className='login-form'>
                    <h1 className='login'>Login</h1>
                    <input
                        className='inpuNm'
                        type="name"
                        placeholder='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className='inpuEml'
                        type="email"
                        placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    <input
                        className='inpuPss'
                        type="password"
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </form>
            </div>


        </div>
    );
};

export default Login;