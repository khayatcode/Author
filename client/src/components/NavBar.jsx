import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    // Create A navbar with links to the following routes: create new author and displayAll
    <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/new'><button className="btn btn-warning">Add New Author</button></Link>
                <Link to='/displayAll'><button className="btn btn-info">View All Authors</button></Link>
            </div>
        </nav>
    </div>

    
  )
}

export default NavBar