import React from 'react'
import { Link } from 'react-router-dom';

function Booklist() {
  return (
    <div className='Books'>
        <h3>Here is our booklist.</h3>
        <Link to = "/books/1">Book 1</Link>
        <br />
        <Link to = "/books/2">Book 2</Link>
        <br />
        <Link to = "/books/3">Book 3</Link>
        <br />
        <Link to = "/books/4">Book 4</Link>
        
    </div>
  )
}

export default Booklist;
