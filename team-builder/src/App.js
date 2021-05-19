import React, { useState } from "react"

const initialFormValues = {
  name: "",
  heroName: "",
  email: ""
}

function App() {

  const [formValues, setFormValues] = useState(initialFormValues)  // state for the form
  const [heroes, setHeroes] = useState([])  // state for heroes

  
  const change = evt => {
    // we're pulling the name of the input from the event.target.name attribute
    // and the value that the user typed in from the event.target.value attribute
    const { name, value } = evt.target  

    setFormValues({ ...formValues, [name]: value })  // we're updating state with the new values
  }



  const submit = evt => {
    evt.preventDefault()

    const newHero = {
      name: formValues.name.trim(),
      heroName: formValues.heroName.trim(),
      email: formValues.email.trim()
    }

    setHeroes(heroes.concat(newHero))
  }
    


  return (
    <div>
      <h1>Avengers Tryouts</h1>

      <form onSubmit={submit}>

        <input
          name="name"
          type="text"
          value={formValues.name}
          onChange={change}
          placeholder="Name"
        />

        <input 
          name="heroName"
          type="text"
          value={formValues.heroName}
          onChange={change}
          placeholder="Hero name"
        />

        <input 
          name="email"
          type="email"
          value={formValues.email}
          onChange={change}
          placeholder="Email"
        />

        <button>Become an Avenger</button>

      </form>

      {heroes.map(hero => {
        return <div key={hero.email}>Name: {hero.name}, Hero name: {hero.heroName}, Email: {hero.email}</div>
      })}

    </div>
  );
}

export default App;
