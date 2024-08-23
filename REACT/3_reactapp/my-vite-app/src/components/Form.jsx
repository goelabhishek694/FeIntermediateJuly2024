import { useState } from "react"

function Form() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`Name: ${name} Email: ${email}`);
        setName("");
        setEmail("");
    }

    const handleName=(e)=>{
        setName(e.target.value)
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' value={name} onChange={handleName} />
        </div>

        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' value={email} onChange={handleEmail} />
        </div>

        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form