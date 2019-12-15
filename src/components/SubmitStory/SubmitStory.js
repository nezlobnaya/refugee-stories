import React, { useState, useEffect } from 'react';
import api from '../../utils/api'
// import { Link } from 'react-router-dom'
import {Form, Field,  withFormik} from 'formik';
import * as yup from 'yup';


const SubmitStory = ({errors, touched, values, status, handleReset, ...props }) => {

    const [storiesPending, setStoriesPending] = useState([]);
    // const [isLoading, setLoading] = useState(false);
    // console.log('Formik props', props);

     

    useEffect(() => {
        if(status) {
            setStoriesPending([...storiesPending, status]);
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);


    return (  
        <div className='story-form'>
         {/* <Link to='/'>Home</Link> */}
            <h2>Tell Us Your Story!</h2>
         <div className='thanks-div'></div>

        <Form>
           <Field name='name' type='text' placeholder='Your name' />

           {touched.name && errors.name && (
               <p className='error'>{errors.name}</p>
           )}

           <Field name='email' type='email' placeholder='Your email' />

            {touched.email && errors.email && (
                <p className='error'>{errors.email}</p>
            )}

            <Field name='title' type='text' placeholder='Title of Your Story' />

           {touched.title && errors.title && (
               <p className='error'>{errors.title}</p>
           )}

            <Field component='textarea' name='contents' type='text' placeholder='Enter your story...' />

           {touched.story && errors.story && (
               <p className='error'>{errors.story}</p>
           )}
 
           
           <div className ='button-div' style={{marginTop: '40px'}}>
           {/* <h2 style={{display: 'none'}}>Thank you for submitting the form!</h2> */}
            <button className='button' type='submit'>Submit the Story
                {/* {isLoading && <h3>Submitting the story...</h3>}
                {!isLoading && <h3>Submit Your Story</h3>} */}
            </button>
           </div>
        </Form>
        
       </div>
        
    );
}

export default withFormik({

    mapPropsToValues: ( values ) => {
        // console.log('Values', values)
        return {
            name: values.name || '',
            email: values.email || '',
            title: values.title || '',
            contents: values.contents || '',
            pending: 1
            // comment: values.comment|| '',
        }
    },
    validationSchema: yup.object().shape({
        title: yup.string().required('Fill out this field!'),
        contents: yup.string().required('Fill out this field!'),
        name: yup.string().required('Fill out this field!'),
        email: yup.string().email('Email not valid!').required()
    }),


    handleSubmit(values, { setStatus, props }) {
       api()
        .post('/stories', values)
        .then(res => {
            console.log('Add Story', res)
            setStatus(res.data);
            props.history.push('/stories')
        })
        .catch(err => console.log(err.response));
    }

}) (SubmitStory)


