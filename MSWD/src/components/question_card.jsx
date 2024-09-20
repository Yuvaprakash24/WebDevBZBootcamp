import React from 'react'

const question_card = ({datas}) => {
  return (
    <div>
        <h4>Question {datas.no}/4</h4>
        <h5>{datas.que}</h5>
        <p>{datas.opt1}</p>
        <p>{datas.opt2}</p>
        <p>{datas.opt3}</p>
        <p>{datas.opt4}</p>
    </div>
  )
}

export default question_card