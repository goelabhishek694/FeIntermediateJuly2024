import { useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik";
import {object, string} from "yup";


function AdvancedForm() {
    const[formData,setFormData] = useState({fullName:"",email:""});

    const handleChange=(e)=>{
        const {name,value} = e.target;
        console.log(e.target);
        console.log("hello", formData);
        setFormData((prevState)=>({...prevState,[name]:value}));
    }

    const validateForm=()=>{
        if(!formData.fullName || !formData.email){
            return false;
        }

        //Additional validation logic 
        return true;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!validateForm()){
            console.log("form is invalid");
            return;
        }
        console.log(`Name: ${formData.fullName} Email: ${formData.email}`);
    }

  return (
    <Formik
        initialValues={{name:"",email:""}}
        validationScehma={object({
            name:string().required("Name is required"),
            email:string().email("invalid email address").required("Email is required"),
        })}
        onSubmit={(values) => {
            console.log(`Form data: ${values}`);
      }}
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

export default AdvancedForm