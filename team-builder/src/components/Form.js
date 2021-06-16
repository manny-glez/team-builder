import React, { useState } from 'react'
import playerData from '../Dummy Data/dummyData'
import PlayerCard from './PlayerCard'
// import axios from 'axios'

console.log(playerData)

const initialFormValues = {
  name: "",
  email: "",
  number: "",
  role: "",
}

export default function Form() {

  const [players, setPlayers] = useState(playerData)
  const [formValues, setFormValues] = useState(initialFormValues)

  // console.log(players)

  const change = event => {
    const { name, value } = event.target

    setFormValues({ ...formValues, [name]: value })
  }

  const sumbit = event => {
    event.preventDefault()
  

  const newPlayer = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    number: formValues.number.trim(),
    role: formValues.role
  }
  if (!newPlayer.name || !newPlayer.email || !newPlayer.number || !newPlayer.role ) return
  // axios.post(playerData, newPlayer)
  //   .then(res => {
  //     const playerFromBackend = res
  //     setPlayers([playerFromBackend, ...players])
  //     setFormValues(initialFormValues)
  //   })

  setPlayers(players.concat(newPlayer))
  }

  return (
    <>
      <h1>Basketball Tournament</h1>
      <form className="form-container" onSubmit={sumbit}>
        <h2>Sign up to Play</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={change}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={change}
        />
        <select value={formValues.role} name="role" onChange={change}>
          <option value="">--Select a Position --</option>
          <option value="PG">Point Gaurd</option>
          <option value="SG">Shooting Gaurd</option>
          <option value="PF">Power Forward</option>
          <option value="SF">Small Forward</option>
          <option value="C">Center</option>
        </select>

        <input
          type="text"
          name="number"
          placeholder="Number"
          value={formValues.number}
          onChange={change}
        />

        <button >Sumbit</button>
      </form>

      <h2>Current Players</h2>
      {
        players.map(player => {
          return <PlayerCard key={player.jerseyNumber} name={player.playerName} number={player.jerseyNumber} position={player.position}/>
        })
      }
    </>
  )
}