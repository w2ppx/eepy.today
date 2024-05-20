import SimpleFM from "@solely/simple-fm"
import { env } from "@/env.mjs"

const client = new SimpleFM(env.LASTFM_TOKEN)
export async function getNowPlaying() {
    return await client.user.getRecentTracks({
        username: env.LASTFM_USERNAME,
        limit: 5,
    })
}
