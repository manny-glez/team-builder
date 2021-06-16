import React from 'react'

function PlayerCard(props) {
 const { name, number, position } = props
  return (
    <div className="player-card">
      <div className="player-number">
        <h2>{number}</h2>
      </div>
      <div className="player-info">
      <h2>{name}</h2>
      <h3>{position}</h3>
      </div>
    </div>
  )
}

export default PlayerCard