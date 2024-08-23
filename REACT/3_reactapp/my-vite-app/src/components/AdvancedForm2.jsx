// import { useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik";
import {object, string} from "yup";


function AdvancedForm2() {
    const validationSchema=object({
        name:string().required("Name is required"),
        email:string().email("invalid email address").required("Email is required"),
    });

    const handleSubmit=(values) => {
        console.log("Form data: ",values);
  }

  return (
    <Formik
        initialValues={{name:"",email:""}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
      <Form>
        <div>
            <label htmlFor="name">Full Name</label>
            <Field name="name" type="text" placeholder="Enter Full Name" />
            <ErrorMessage name="name" component="div"/>
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" placeholder="Enter Email" />
            <ErrorMessage name="email" component="div"/>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default AdvancedForm2