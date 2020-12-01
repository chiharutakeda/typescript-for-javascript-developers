export {};
//ジェネリクスについて
//関数の作成コストを下げることができる
//引数の型を呼び出す側で指定
//超便利らしい
// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

//<T>が抽象的な型を示す（型引数といわれる）
const echo = <T>(arg: T): T => {
  return arg;
};

//呼び出す側で型を指定できる。number指定
console.log(echo<number>(100));

//呼び出す側で型を指定できる。string指定
console.log(echo<string>('hello!'));

//呼び出す側で型を指定できる。boolean指定
console.log(echo<boolean>(true));

//クラスも適用できる　Tが一般的
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('generics').echo());
console.log(new Mirror<boolean>(true).echo());
