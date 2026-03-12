import { env } from "../utils"

const BASE_URL = env.API_BASE_URL


export const apiRoutes = {
    visite: {
        send: `${BASE_URL}/send`,
        list: `${BASE_URL}/list`,
        test: `${BASE_URL}/test`,
    },
    history: {
        in_hero_section: `${BASE_URL}/visite`,
        list: `${BASE_URL}/?q=`,
        details: (uuid: string) => `${BASE_URL}/${uuid}`,
    },
}
