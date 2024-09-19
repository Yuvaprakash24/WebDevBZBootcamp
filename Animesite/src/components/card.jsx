import React from 'react'

const Card = ({ele}) => {
  return (
    <div>
      <div className="card">
        <img src={ele.images.jpg.image_url} alt="" />
        <h3>Title:{ele.title}</h3>
        <h5>Score:{ele.score}</h5>
      </div>
    </div>
  )
}

export default Card
