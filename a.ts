// let x:number=1;
// console.log(x);


// // number, string, any
// function greet(firstName: string, lastName: string) {
//     console.log('hello' + firstName);
// }

// greet('prikshit','chawla');

// type inference => TS was able to automatically
// identify the type of return of sum

// function sum(a: number, b: number): number {
//     return a + b;
// }

// const value = sum(10, 20);
// console.log(value);


// function isLegal(age: number): boolean {
//     return age > 18;
// }

// let x: boolean = isLegal(20);

function hof(fn: Function) {
    setTimeout(fn, 1000);
}

hof(function () {
    console.log('hi there');
})