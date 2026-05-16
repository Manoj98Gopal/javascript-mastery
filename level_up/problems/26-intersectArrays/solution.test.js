const intersectArrays = require('./solution')

describe('intersectArrays', () => {
    it('test case 1', () => {
        expect(intersectArrays([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
    })
    it('test case 2', () => {
        expect(intersectArrays([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4])
    })
    it('test case 3', () => {
        expect(intersectArrays([1, 2], [1, 1])).toEqual([1])
    })
    it('test case 4', () => {
        expect(intersectArrays([], [1, 2])).toEqual([])
    })
    it('test case 5', () => {
        expect(intersectArrays([1, 2], [])).toEqual([])
    })
})