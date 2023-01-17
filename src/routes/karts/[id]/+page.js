import { fetchKarts } from '$lib/utils'

export const load = async ({params}) => {
    const karts = await fetchKarts()
    const kart = karts.find(k => k.id == params.id)
    return kart
}