import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios'
import DeleteButton from './DeleteButton'


const DisplayAll = () => {
    const [authors, setAuthors] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:8000/api/author/displayAll')
            .then(res => {
                console.log(res)
                const sortedAuthors = res.data.sort((a, b) => a.name.localeCompare(b.name))
                setAuthors(sortedAuthors)
            })
            .catch(err => console.log(err))
    }, [])


    const navigateToEdit = authorId => {
        navigate("/edit/" + authorId)
    }

    const navigateToView = authorId => {
        navigate("/view/" + authorId)
    }




    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

  return (
    <div className='container col-8'>
        <h1>Display All Authors</h1>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Author</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                { authors.length > 0 ? (authors.map((author) => {
                        return (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td className='d-flex gap-3 justify-content-center'>
                                    <button className='btn btn-info' onClick={(e) => navigateToView(author._id)}>View</button>
                                    <button className='btn btn-warning' onClick={(e) => navigateToEdit(author._id)}>Edit</button>
                                    <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)}/>
                                </td>
                            </tr>
                        )
                    })) : (<tr><td colSpan='2'>No authors found</td></tr>)
                }
            </tbody>
        </table>


    </div>
    )
}

export default DisplayAll