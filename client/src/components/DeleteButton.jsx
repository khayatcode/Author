import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const {authorId, successCallback, css} = props;

    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/delete/' + authorId)
            .then(res => {
                console.log(res)
                console.log("Deleted")
                successCallback();
            })
    }

  return (
    <button className={`btn btn-danger ${css}`} onClick={deleteAuthor}>Delete</button>
  )
}

export default DeleteButton