import React from 'react';
// formik allows us to do forms in a nicer way than regualr
import { Formik, Form, Field, ErrorMessage} from 'formik'
// yup helps for form validation
import * as Yup from 'yup';
// to make a post
import axios from 'axios';
// to 
import {useNavigate} from "react-router-dom";

function CreatPost() {
  let navigate = useNavigate();

  // creating the object for the form
  const initialValues = {
    title:"",
    username:"",
    postText:""
  };
  // using yup's lovely shorthand for a page of logic
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a title"),
    username: Yup.string().min(3).max(20).required("You must input a username"),
    postText: Yup.string().required()
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log(response);
      console.log(navigate("/"));
    });
  };
  return (
    <div className='Page'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
          <div className='input-fields'>
            <label>Title: </label>
            <ErrorMessage name="title" component="span"/>
            <Field
              id="inputCreatePost" 
              name="title" 
              placeholder="(e.g. Weather Today)"
            />
            <label>Username: </label>
            <ErrorMessage name="username" component="span"/>
            <Field 
              id="inputCreatePost" 
              name="username" 
              placeholder="(e.g. Jack)"
            />
            <label>Post: </label>
            <ErrorMessage name="postText" component="span"/>
            <Field 
              id="inputCreatePost" 
              name="postText" 
              placeholder="(e.g. it's raining)"
            />
          </div>
          <button className='submit-post' type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatPost;
