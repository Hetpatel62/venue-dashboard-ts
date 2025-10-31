import React, { useEffect, useState } from 'react'
import { mockFetchVenues } from './mock/firebase'
import ScreenControl from './components/ScreenControl'
import VenueStats from './components/VenueStats'

type Venue = {
  id: string;
  name: string;
  screensOn: boolean;
  viewers: number;
}

export default function App() {
  const [venues, setVenues] = useState<Venue[]>([])

  useEffect(() => {
    async function load() {
      const v = await mockFetchVenues()
      setVenues(v)
    }
    load()
  }, [])

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Venue Management Dashboard (TypeScript)</h1>
      {venues.map(v => (
        <div key={v.id} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12, borderRadius: 8 }}>
          <ScreenControl venue={v} onToggle={(id, value) => {
            setVenues(prev => prev.map(x => x.id === id ? {...x, screensOn: value} : x))
          }} />
          <VenueStats venue={v} />
        </div>
      ))}
    </div>
  )
}
