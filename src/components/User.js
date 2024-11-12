import React from 'react'

function User({data}) {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <br/>
    </div>
  )
}

export default User