import React, {useState} from 'react'
import './form.css';


function Form({setStates}) {
  const initialState ={
    noun:"",
    noun2:"",
    adjective:"",
    color:""
  }
  const [formData, setFormData] = useState(initialState)
  
  const handleChange  = e => {
  const {name, value }= e.target
  setFormData(data=>({
    ...data, [name]:value
  }))  
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {noun, noun2, adjective, color} = formData
    setStates(noun, noun2, adjective, color)
    setFormData(initialState)
    }


  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="noun">Noun</label>
        <input id="noun" type="text" name="noun" placeholder="Ali" value={formData.noun} onChange={handleChange} required/>
        <label htmlFor="noun2">Noun2</label>
        <input id="noun2" type="text" name="noun2" placeholder="noun2" value={formData.noun2} onChange={handleChange} required />
        <label htmlFor="adjective">Adjective</label>
        <input id="adjective" type="text" name="adjective" placeholder="adjective" value={formData.adjective} onChange={handleChange} required/>
        <label htmlFor="color">Color</label>
        <input id="color" type="text" name="color" placeholder="green" value={formData.color} onChange={handleChange} required/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;


