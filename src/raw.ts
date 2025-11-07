import destr from "destr"

export const raw = (object: Record<string, unknown>) => destr<any | unknown>(JSON.stringify(object))