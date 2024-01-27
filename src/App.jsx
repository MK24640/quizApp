import { useState } from 'react'
import './App.css'

function App () {
  let [quiz ,setquiz] = useState(false);
  let [form, setform] =useState(false);
  let [questionList, setquestionList] = useState([
    {
      id: 'Q-1',
      Question: 'Which of the following is an example of an output device?',
      Opt1: 'Monitor',
      Opt2: 'Keyboard',
      Opt3: 'Mouse',
      Opt4: 'Printer',
      Answer: 'Monitor'
    },
    {
      id: 'Q-2',
      Question: 'Which of the following is the main function of the CPU?',
      Opt1: 'Storing data',
      Opt2: 'Executing instructions',
      Opt3: 'Input and output',
      Opt4: 'Networking',
      Answer: 'Executing instructions'
    },
    {
      id: 'Q-3',
      Question: 'What is the full form of RAM?',
      Opt1: 'Random Access Memory',
      Opt2: 'Read Only Memory',
      Opt3: 'Real Time Memory',
      Opt4: 'Reduced Access Memory',
      Answer: 'Random Access Memory'
    },
  ])
  function handleQuestion(e) {
    newquestion.Question = e.target.value;
  }
  function handleOption1(e) {
    newquestion.Opt1 = e.target.value;
  }
  function handleOption2(e) {
    newquestion.Opt2 = e.target.value;
  }
  function handleOption3(e) {
    newquestion.Opt3 = e.target.value;
  }
  function handleOption4(e) {
    newquestion.Opt4 = e.target.value;
  }
  function handleAsnwer(e) {
    newquestion.Answer = e.target.value;
  }
let [newquestion, setnewquestion] = useState({
  Question: '',
  Opt1: '',
  Opt2: '',
  Opt3: '',
  Opt4: '',
  Answer: ''
  
})
  function addQuestion(){
    let Question = document.getElementById("Question").value;
    let Opt1 = document.getElementById("Opt1").value;
    let Opt2 = document.getElementById("Opt2").value;
    let Opt3 = document.getElementById("Opt3").value;
    let Opt4 = document.getElementById("Opt4").value;
    let Answer = document.getElementById("Answer").value;
    if(Question !=="" && Opt1 !=="" && Opt2 !=="" && Opt3 !==""&& Opt4 !=="" && Answer !==""){
      setquestionList([...questionList,
        newquestion])
        alert("Add")
    }
    else{
      alert("Please fill all input value")
    }
  }

  return (
    <>
      <div className='main'>
        <div className='header'>
          <button className='btn' onClick={()=>setquiz(!quiz)}>View Quiz</button>
          <button className='btn' onClick={()=>setform(!form)}>Add Quiz</button>
        </div>
        <div className='content'>
        {
          form ?<div className="form">
          <label htmlFor="Question"></label>
          <input type='text' id='Question' onChange={handleQuestion} placeholder='Write your question here...'/>

          <label htmlFor="Opt1"></label>
          <input type='text' id='Opt1' onChange={handleOption1} placeholder='Option 1'/>

          <label htmlFor="Opt2"></label>
          <input type='text' id='Opt2' onChange={handleOption2} placeholder='Option 2'/>

          <label htmlFor="Opt3"></label>
          <input type='text' id='Opt3' onChange={handleOption3} placeholder='Option 3'/>

          <label htmlFor="Opt4"></label>
          <input type='text' id='Opt4' onChange={handleOption4} placeholder='Option 4'/>

          <label htmlFor="Answer"></label>
          <input type='text' id='Answer' onChange={handleAsnwer} placeholder='Answer'/>
          <input type="button" value="Add Question"  onClick={addQuestion}/>
        </div> :null
        }
          {
            quiz?        <div className='quiz'>
            <div>
              {questionList.map(item => {
                return (
                  <ol>
                    <b>
                    {item.Question}</b>
                    <li>{item.Opt1}</li>
                    <li>{item.Opt2}</li>
                    <li>{item.Opt3}</li>
                    <li>{item.Opt4}</li>
                    <li className='answer'>{item.Answer}</li>
                    <hr className='style-one' />
                  </ol>
                )
              })}
            </div>
          </div> :null
          }
        </div>
      </div>
    </>
  )
}

export default App
