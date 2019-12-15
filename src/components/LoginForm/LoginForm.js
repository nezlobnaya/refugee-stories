import React from 'react';
import {Link} from 'react-router-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import api from '../../utils/api'

const LoginForm = ({ errors, touched }) => {

    return ( 
        <Form className='story-form'>
            <div className='form'>
                {/* <label className='label'>Username</label>  */}
                    <Field name='username' type='username' placeholder='Username'
                        // autoComplete='off' 
                     />
                     <p>{touched.username && errors.username}</p>
            </div>
            <div className='form'>
                {/* <label className='label'>Password</label>  */}
                    <Field name='password' type='password' placeholder='Password'
                        // autoComplete='off'
                     />
                    <p>{touched.password && errors.password}</p>
            </div>           
            <button type='submit' >Come on in &rarr; </button>
            <Link to="/register" style={{}}>Don't have an account?</Link>
        </Form>
     );
}
 
export default withFormik ({
    mapPropsToValues() {
        return {
            username: '',
            password: ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(4).required()
    }),
    handleSubmit(values, formikBag) {
        api()
        .post('/users/login ', values)
        .then(res => {
            console.log('Res', res)
            localStorage.setItem('token', res.data.token)
            formikBag.props.history.push('/stories')
        })
        .catch(e => console.log(e.response.data.message))
    }
}) (LoginForm);