import React from 'react'
import Card from './card'
const animelist = ({animedata}) => {
  return (
    <>{
        animedata.map((animeele)=>{
          return <Card key={animeele} ele={animeele}/>
        })
      }</>
  )
}

export default animelist