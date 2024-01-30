import { cleanObject } from "../cleanObject"

describe('CleanObject', () => {
    it('should clean undefined values in an object', () => {
        cleanObject({ a: null, b: 'b', c: undefined})
    })

    it('should clean nullish values in an object', () => {
        cleanObject({ a: null, b: 'b', c: 1, d: []})
    })
})