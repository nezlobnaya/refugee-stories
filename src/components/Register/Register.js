import React, { useState } from 'react';
import api from '../../utils/api'
import { Link } from 'react-router-dom';
// import { useSelector }  from 'react-redux'
// import axios from 'axios'

function Register(props) {
    // const state = useSelector(state => state.entry)
    const [entry, setEntry] = useState({
        username: '',
        // firstName: '',
        // lastName: '',
        password: '',
        role: ''
    })

    const handleChange = e => {
        setEntry({...entry, [e.target.name]: e.target.value})
        // console.log('Register input value...', entry)
    }

    const handleSubmit = e => {
        e.preventDefault();
        api().post("/users/register", entry)
        .then(res => {
            console.log('Register Res', res)
            localStorage.setItem('token', res.data.token)
            console.log('Token', res.data.token)
            props.history.push('/login')
        })
        .catch(err => console.log(err))
    };
    
    return (
        <div className='story-form'>   
            <h3>First time here? Create an account!</h3>
            <form onSubmit={handleSubmit} className='register-form'>
                <input
                onChange={handleChange} 
                type='username' 
                name='username' 
                // autoComplete='off'
                placeholder='Username'>
                </input>
                <input
                onChange={handleChange} 
                type='password'
                name='password' 
                // autoComplete='off'
                placeholder='Password'>
                </input>
                <input
                onChange={handleChange} 
                type='role'
                name='role' 
                // autoComplete='off'
                placeholder='Role'>
                </input>
                <button>Submit</button>

                <div id='login'>
                <Link to='/login'>Already have an account?</Link>
                </div>
            </form> 
        </div> 
    )
}

export default Register;