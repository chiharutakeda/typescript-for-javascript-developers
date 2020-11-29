export {};

//エラー発生の型　値が返ってこない 値の概念がない
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log(result);
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
//error関数はneverを返すので代入できる（使いどころがないらしい）
let bar: never = error('only me!');
