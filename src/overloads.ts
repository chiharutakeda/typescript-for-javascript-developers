export {};

//こちらが実体になる。一つの関数に対して型の種類を複数できる。
function double(value: number): number;
function double(value: string): string;

//ここでは型定義をanyでしておいて
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('GO'));
// console.log(double(true));
