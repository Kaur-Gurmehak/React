import React from 'react'

export default function section({children,abc,xyz}) {
    var condition=true;

  return (
    <div>
        <h1>section page</h1>
        {children}
        {condition?abc:xyz}
    </div>

  )
}
