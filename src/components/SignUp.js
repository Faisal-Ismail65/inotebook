import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const respose = await fetch('http://localhost:5000/api/auth/createuser', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await respose.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            props.showAlert("success" , "Account Created Successfully...");
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
            <h2>Create an Account To Use INoteBook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input value={credentials.name} required minLength={8} onChange={handleChange} type="name" className="form-control" name='name' id="name" placeholder="Enter Your Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input value={credentials.email} required minLength={8} onChange={handleChange} type="email" className="form-control" name='email' id="email" placeholder="name@gmail.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input value={credentials.password} required minLength={8} onChange={handleChange} type="password" className="form-control" name='password' id="password" placeholder="****" />
                </div>
                <div className="mb-3">
                    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
                    <input value={credentials.cpassword} required minLength={8} onChange={handleChange} type="password" className="form-control" name='cpassword' id="cpassword" placeholder="****" />
                </div>
                <button type='submit' className='btn btn-primary'>SignUp</button>
            </form>
        </div>
    )
}

export default Signup