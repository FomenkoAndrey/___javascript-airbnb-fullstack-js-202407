"use strict";
const isEmpty = (d) => !d;
const isUndefined = (d) => typeof d === 'undefined';
const PI = Math.PI;
const EXP = Math.E;
var Util;
(function (Util) {
    Util.isEmpty = (d) => !d;
    Util.isUndefined = (d) => typeof d === 'undefined';
    Util.PI = Math.PI;
    Util.EXP = Math.E;
})(Util || (Util = {}));
console.log(Util.PI);
console.log(Util.EXP);
var Outer;
(function (Outer) {
    let Inner;
    (function (Inner) {
        function helper() {
            return 'Inner helper';
        }
        Inner.helper = helper;
    })(Inner = Outer.Inner || (Outer.Inner = {}));
})(Outer || (Outer = {}));
console.log(Outer.Inner.helper());
var Inner = Outer.Inner;
console.log(Inner.helper());
