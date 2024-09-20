import React from 'react'
import Card from './home_card'
let data1={id:'01',title:'One',info:'an Identity card using React',linkto:'/usercard'}
let data2={id:'02',title:'Two',info:'a counter and link it using react router',linkto:'/counter'}
let data3={id:'03',title:'Three',info:'a login form which displays user information in the end',linkto:'/form'}
let data4={id:'04',title:'Four',info:'a quiz which displays score in the end',linkto:'/quiz'}
const home = () => {
  return (
    <div>
      <h1>React Skilling Task</h1>
      <div className="card_container">
        <Card data={data1}/>
        <Card data={data2}/>
        <Card data={data3}/>
        <Card data={data4}/>
      </div>
    </div>
  )
}

export default home
