import React from 'react'
import { Venue } from '../mock/firebase'

export default function ScreenControl({ venue, onToggle }: { venue: Venue, onToggle: (id: string, val: boolean)=>void }) {
  return (
    <div>
      <h3>{venue.name}</h3>
      <p>Screens: {venue.screensOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => onToggle(venue.id, !venue.screensOn)}>
        Toggle Screens
      </button>
    </div>
  )
}
