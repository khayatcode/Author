import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'



const CreateAuthor = (props) => {
    
    const {onSubmitProp, initialName, message} = props;
    const [name, setName] = useState(initialName);
    const [errors, setErrors] = useState({});

    const formValidations = () => {
        let isValid = true;
        if(name.length < 2){
            isValid = false;
        }
        return isValid;
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        if(formValidations()){
            onSubmitProp({name})
            setName("")
        }
        else {
            setErrors({name: {message: "Name must be at least 2 characters"}})
        }

    }


  return (

    <div className='container mt-3 col-6'>
        { message? <h1>{message}</h1> : <h1>Add Author </h1>
        }
        <form onSubmit={onSubmitHandler}>
            <div className='form-floating mt-3'>
                <input type="text" name="name" className="form-control" id="titleInput" placeholder="Name" value={name}  onChange={(e)=>setName(e.target.value)}/>
                <label htmlFor="titleInput">Name:</label>
            </div>
                {errors.name ? <span className='text-danger'>{errors.name.message}</span> : ""}
            <div className='d-grid gap-2 mt-3'>
                <button type="submit" className="btn btn-success">Submit Author</button>
            </div>
        </form>
    </div>
  )
}

export default CreateAuthor