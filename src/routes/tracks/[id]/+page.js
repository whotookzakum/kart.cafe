import { fetchTracks } from '$lib/utils'

export const load = async ({params}) => {
    const tracks = await fetchTracks()
    const track = tracks.find(t => t.id == params.id)
    return track
}