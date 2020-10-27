"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equilateTriangle = void 0;
function equilateTriangle(noOfRows) {
    let str = "";
    for (let i = 1; i <= noOfRows; i++) {
        for (let j = 1; j <= (noOfRows - i); j++) {
            str = str.concat(" ");
        }
        for (let k = 1; k <= i; k++) {
            str = str.concat("* ");
        }
        str = str.concat("\n");
    }
    console.log(str);
}
exports.equilateTriangle = equilateTriangle;
/*
for(let i=2;i<=10;i++)
{
    equilateTriangle(i);
}*/
//# sourceMappingURL=equilateralTriangle.js.map