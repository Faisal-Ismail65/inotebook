import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" , cpassword : "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const respose = await fetch('http://localhost:5000/api/auth/createuser', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: credentials.name ,email: credentials.email, password: credentials.password })
        });
        const json = await respose.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate("/")
        }
        setCredentials({ email: "", password: "" })
    }
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input value={credentials.name} onChange={handleChange} type="name" className="form-control" name='name' id="name" placeholder="Enter Your Name" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input value={credentials.email} onChange={handleChange} type="email" className="form-control" name='email' id="email" placeholder="name@gmail.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input value={credentials.password} onChange={handleChange} type="password" className="form-control" name='password' id="password" placeholder="****" />
            </div>
            <div className="mb-3">
                <label htmlFor="cPassword" className="form-label">Confirm Password</label>
                <input value={credentials.cpassword} onChange={handleChange} type="password" className="form-control" name='cpassword' id="cpassword" placeholder="****" />
            </div>
            <button type='submit' onClick={handleSubmit} className='btn btn-primary'>SignUp</button>
        </div>
    )
}

export default Signup