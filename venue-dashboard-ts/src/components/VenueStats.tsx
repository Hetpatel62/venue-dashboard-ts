import React from 'react'
import { Venue } from '../mock/firebase'

export default function VenueStats({ venue }: { venue: Venue }) {
  return (
    <div style={{ marginTop: 8 }}>
      <p>Current Viewers: {venue.viewers}</p>
      <p>Venue ID: {venue.id}</p>
    </div>
  )
}
