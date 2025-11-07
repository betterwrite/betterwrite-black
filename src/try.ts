import { Awaitable } from "./types"

const nextTick = async () => {
    // TODO: how to sync in typescript
}

export const tryAndCatch = (cb?: () => void): Awaitable<void | Record<string, unknown>> => {
    return new Promise(async (res, rej) => {
        try {
            await nextTick()

            cb && cb()

            res()
        } catch(e) {
            rej(e)
        }
    })
}