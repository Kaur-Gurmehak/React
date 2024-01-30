import React from 'react'
import Blog from './Blog'


function Contact({namee,roll,courses}) {
  return (
    <div>
    <h1>Contact</h1>
    <Blog name={namee} rollno={roll} course={courses}/>
    </div>
  )
}

export default Contact