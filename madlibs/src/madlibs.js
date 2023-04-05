import React, {useState} from 'react'
import Form from "./form"
import Story from "./story"


function Madlibs() {
  const initialState={}
  const [isFormVisible, setIsFormVisible] = useState(true)
  const [words, setWords] = useState(initialState)


const setStates = (noun, noun2, adjective, color) => {
    setWords({noun, noun2, adjective, color})
    setIsFormVisible(!isFormVisible)
}

const setVisibility = () => {
  setIsFormVisible(!isFormVisible)
}

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Madlibs!</h1>
      <div style={{visibility:isFormVisible ? "visible" : "hidden"}}>
        <Form setStates={setStates} />
      </div>

      <div style={{visibility:isFormVisible ? "hidden" : "visible"}}>
        <Story words={words} setVisibility={setVisibility}/>
      </div>

    </div>
  )
}

export default Madlibs;
