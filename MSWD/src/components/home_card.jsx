import React from 'react'
import { Link } from 'react-router-dom'
const home_card = ({data}) => {
  return (
    <div className='card'>
      <h1>{data.id}</h1>
      <h3>Skill {data.title}</h3>
      <p>Here I create {data.info}</p>
      <button> <Link to={data.linkto}>Visit</Link></button>
    </div>
  )
}

export default home_card
