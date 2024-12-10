const isEmpty = (d: any) => !d
const isUndefined = (d: any) => typeof d === 'undefined'
const PI = Math.PI
const EXP = Math.E

namespace Util {
  export const isEmpty = (d: any) => !d
  export const isUndefined = (d: any) => typeof d === 'undefined'
  export const PI = Math.PI
  export const EXP = Math.E
}

console.log(Util.PI)
console.log(Util.EXP)

namespace Outer {
  export namespace Inner {
    export function helper(): string {
      return 'Inner helper'
    }
  }
}

console.log(Outer.Inner.helper())

import Inner = Outer.Inner

console.log(Inner.helper())
