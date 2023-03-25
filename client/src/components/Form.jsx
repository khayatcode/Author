import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CreateAuthor from './CreateAuthor'

const Form = () => {
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/displayAll')
            .then(res => {
                console.log(res)
                setAllAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author/create', author)
            .then(res => {
                console.log(res)
                setAllAuthors([...allAuthors, res.data])
            })
            .catch(err => {
                console.log(err.response.data.errors)
            })
    }


  return (
    <div>
        <CreateAuthor onSubmitProp={createAuthor} initialName=""/>
    </div>
  )
}

export default Form