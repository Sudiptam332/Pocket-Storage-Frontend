import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spiner from './Spiner';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch("https://pocket-storage-backend.onrender.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email: emailRef.current.value, password: passwordRef.current.value })
        });
        try {
            const json = await response.json();
            console.log(json);
            if (json.success) {
                localStorage.setItem('token', json.authtoken);
                setLoading(false);
                navigate('/');
            } else {
                alert("Invalid Credentials");
                setLoading(false);
                navigate('/login');
            }
        } catch (error) {
            console.error('Failed to parse JSON response:', error);
            alert("An unexpected error occurred. Please try again later.");
            setLoading(false);
            navigate('/login');
        }
    }

    return (
        loading ? <Spiner /> :
            <div className='loginContainer'>
                <h2 className='text-center'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 my-4">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input ref={emailRef} type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input ref={passwordRef} type="password" className="form-control" id="password" name='password' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    );
}

export default Login;
