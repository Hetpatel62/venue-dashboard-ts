/**
 * mock/firebase.ts
 * A tiny mock of Firebase Firestore operations for local demo
 */
export type Venue = {
  id: string;
  name: string;
  screensOn: boolean;
  viewers: number;
}

const venues: Venue[] = [
  { id: 'v1', name: 'The Tipsy Tavern', screensOn: true, viewers: 12 },
  { id: 'v2', name: 'Corner Bistro', screensOn: false, viewers: 4 },
  { id: 'v3', name: 'Main Street Bar', screensOn: true, viewers: 27 },
]

export async function mockFetchVenues(): Promise<Venue[]> {
  // simulate network delay
  await new Promise(res => setTimeout(res, 300))
  return venues.map(v => ({...v}))
}

export async function mockToggleScreens(venueId: string, on: boolean): Promise<void> {
  await new Promise(res => setTimeout(res, 200))
  const v = venues.find(x => x.id === venueId)
  if (v) v.screensOn = on
}
