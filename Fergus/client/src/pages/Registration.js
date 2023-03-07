import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
// yup helps for form validation
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from "react-router-dom";



function Registration() {
    let navigate = useNavigate();

    const initialValues = {
        username:"",
        password:""
      };
    // using yup's lovely shorthand for a page of logic
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(20).required(),
        password: Yup.string().required()
    });
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/users", data).then((response) => {
            console.log(response);
            console.log(navigate("/"));
        });
    };
  return (
    <div className='Page'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <div className='input-fields'>
                    <label>Username: </label>
                    <ErrorMessage name="username" component="span"/>
                    <Field 
                    id="inputCreatePost" 
                    name="username" 
                    placeholder="(e.g. Jack)"
                    />
                    <label>Password: </label>
                    <ErrorMessage name="password" component="span"/>
                    <Field 
                    id="inputCreatePost" 
                    name="password" 
                    placeholder="e.g. password123"
                    type="password"
                    />
                </div>
                <button className='submit-post' type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
  );
}

export default Registration