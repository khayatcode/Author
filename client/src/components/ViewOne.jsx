import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DeleteButton from './DeleteButton'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ViewOne = () => {
    const [author, setAuthor] = useState({})
    const [loaded, setLoaded] = useState(false)
    const {id} = useParams();
    const navigate = useNavigate()

    

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/displayOne/' + id)
            .then(res => {
                console.log(res)
                setAuthor(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const navigateToEdit = authorId => {
        navigate("/edit/" + authorId)
    }


  return (



    <div className='container col-5'>
        {
            loaded && (
                <>
                    <h1 className='mt-3'>Display One Author</h1>
                    <div className="card mt-3 ">
                        <div className="card-body">
                            <h3 className="card-title p-3">Author Name: <span className='text-decoration-underline'>{author.name}</span></h3>
                            <div className='d-flex gap-3 justify-content-center'>
                                <button className="btn btn-primary" onClick={() => navigateToEdit(author._id)}>Edit</button>
                                <DeleteButton authorId={author._id} successCallback={() => navigate("/displayAll")}/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

    </div>
  )
}

export default ViewOne