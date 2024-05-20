import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        LASTFM_TOKEN: z.string(),
        LASTFM_USERNAME: z.string(),
    },
    client: {},
    experimental__runtimeEnv: {},
})
