import React from 'react'
import Contact from "./Contact"

function About({n,r,c}) {
  return (
    <div>
        <h1>About</h1>
        <Contact namee={n} roll={r} courses={c}/>
    </div>
  )
}

export default About