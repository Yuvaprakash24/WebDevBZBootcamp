import React from 'react'
import Question_card from './question_card'
const data={ques1:{no:'1',que:'What is the capital of France?',opt1:'NEW YORK',opt2:'LONDON',opt3:'PARIS',opt4:'DUBLIN'},ques2:{no:'2',que:'Who is CEO of Tesla?',opt1:'TONY STARK',opt2:'ELON MUSK',opt3:'BILL GATES',opt4:'BRUCE WAYNE'},ques3:{no:'3',que:'The iPhone was created by which company?',opt1:'APPLE',opt2:'INTEL',opt3:'AMAZON',opt4:'MICROSOFT'},ques4:{no:'4',que:'How many Harry Potter books are there?',opt1:'1',opt2:'4',opt3:'6',opt4:'7'}}
const quiz = () => {
  return (
    <div>
        <h1>Quiz</h1>
        <Question_card datas={data.ques1}/>
        <Question_card datas={data.ques2}/>
        <Question_card datas={data.ques3}/>
        <Question_card datas={data.ques4}/>
    </div>
  )
}

export default quiz