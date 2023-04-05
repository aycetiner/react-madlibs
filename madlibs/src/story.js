import React, {useState} from 'react'

function Story({ words, setVisibility}) {
const storyList=[`${words.noun} was walking together with ${words.noun2}. They were so ${words.adjective} and they had ${words.color} car.`]

  const handleClick = (e) => {
    setVisibility()
    }
    
  return (
    <div style={{textAlign:"center"}}>
      <h2>Story</h2>
      <p> {storyList[0]} </p>
      <button onClick={handleClick}>Restart</button>
    </div>
  )
}

export default Story;


