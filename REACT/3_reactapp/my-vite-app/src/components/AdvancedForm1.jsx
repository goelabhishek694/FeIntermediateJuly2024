import {useState} from "react"

function AdvancedForm1() {
        const[formData,setFormData] = useState({name:"",email:""});

    const handleChange=(e)=>{
        const {name,value} = e.target;
        console.log(e.target);
        console.log("hello", formData);
        setFormData((prevState)=>({...prevState,[name]:value}));
    }

    const validateForm=()=>{
        if(!formData.name || !formData.email){
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
        console.log(`Name: ${formData.name} Email: ${formData.email}`);
    }
  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' value={formData.name} onChange={handleChange} />
    </div>

    <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' value={formData.email} onChange={handleChange} />
    </div>

    <button type='submit'>Submit</button>
</form>
  )
}

export default AdvancedForm1