import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import CreateAuthor from './CreateAuthor';
import DeleteButton from './DeleteButton';



const EditForm = (props) => {
    const {id} = useParams();
    const [author, setAuthor] = useState({})
    const [error, setError] = useState()
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/displayOne/' + id)
            .then(res => {
                console.log(res.data)
                console.log("Success")
                setAuthor(res.data)
                setLoaded(true)
            })
            .catch(err => {
                console.log(err)
                console.log("Error")
                setError("Author Not Found Using ID")
            }
                )
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/edit/' + id, author)
            .then(res => {
                console.log(res)
                navigate("/view/" + id)
            })
            .catch(err => console.log(err.response.data.errors))
    }



  return (
    <div>
        {
            error && (
                <h1 className='text-danger'>{error}</h1>
            )
        }
        {
            loaded && (
                <>
                    <CreateAuthor onSubmitProp={updateAuthor} initialName={author.name} message="Edit Form"/>
                    <DeleteButton authorId={author._id} successCallback={(e) => navigate("/displayAll")} css="mt-3 col-5"/>
                </>
            )

        }
    </div>



  )
}

export default EditForm