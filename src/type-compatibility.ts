export {};
//型の互換性について
let fooCompatible: any;
let barConpatible: string = 'Typescript';

console.log(typeof fooCompatible);

fooCompatible = barConpatible;

console.log(typeof fooCompatible);

let fooInCompatible: string;
let baarIncompatible: number = 1;

// fooInCompatible =baarIncompatible

let fooString: string;
let barString: string = 'string';
fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;

fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}
//代入される側のメンバーを代入する側は持っていないといけない
//その逆は見てない
let me: Animal;
me = new Person(43,'chiharu');
