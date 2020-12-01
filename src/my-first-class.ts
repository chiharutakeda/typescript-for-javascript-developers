export {};

class Person {
  //プロパティの型定義
  name: string;
  age: number;

  //クラスの引数の型定義(コンストラクターに戻り値はないので戻り値の型を書かない)
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age:${this.age}`;
  }
}

let taro: Person = new Person('taro', 22);
// let hanako = new Person();
// let kenta = new Person();

console.log(taro);
console.log(taro.profile());
