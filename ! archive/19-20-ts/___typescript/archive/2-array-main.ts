const strArrJs = ['a', 'b', 'c']
const strArrTs: string[] = ['a', 'b', 'c']
const strArrTs2: Array<string> = ['a', 'b', 'c']

const numArrJs = [1, 2, 3]
const numArrTs: number[] = [1, 2, 3]
const numArrTs2: Array<number> = [1, 2, 3]

const boolArrJs = [true, false]
const boolArrTs: boolean[] = [true, false]
const boolArrTs2: Array<boolean> = [true, false]

const someTypeArrJs = [1, 'a', true, {}]
const someTypeArrTs: (number | string | boolean)[] = ['a', 1, 2, true, 34, 'b', false]
// const someTypeArrTs: (number | string | boolean)[] = [1, 'a', true, null, {}] // Error: null is not assignable to number | string | boolean

const tuplesArr: [number, string, number, string] = [1, 'a', 2, 'b']
const tuplesArr2: [boolean, number, string] = [true, 1, 'a']

const anyArr: any[] = [1, 'a', true, {}, 123, 'b', false, [123]]
