import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const respose = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await respose.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            props.showAlert("success" , "Logged In Successfully....");
            navigate("/");
        }else{
            props.showAlert("danger" , "!Invalid Credentials");
        }
        setCredentials({ email: "", password: "" })
    }
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <div className='container'>
            <h2>Login To Use INoteBook</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input value={credentials.email} onChange={handleChange} required minLength={8}  type="email" className="form-control" name='email' id="email" placeholder="name@gmail.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input value={credentials.password} onChange={handleChange} required minLength={8} type="password" className="form-control" name='password' id="password" placeholder="****" />
            </div>
            <button type='submit' className='btn btn-primary'>Login</button>
            </form>
        </div>
    )
}

export default Login