export {};

class Person {
  //プロパティの型定義
  public name: string; //わざわざpublicは書かないらしい
  private age: number; //制約を課したいときにprivateをつける subクラスから参照できないようにできる
  protected nationality: string; //subクラスでも参照できる こっちの方が緩いということ

  //クラスの引数の型定義(コンストラクターに戻り値はないので戻り値の型を書かない)
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  
  profile(): string {
    return `name: ${this.name}, age:${this.age}, nationality:${this.nationality}`;
  }
}

class Andoroid extends Person {
  
  //クラスの引数の型定義(コンストラクターに戻り値はないので戻り値の型を書かない)
  constructor(name: string, age: number, nationality: string) {
    super(name,age,nationality)
  }
  profile():string{
    return `name: ${this.name},nationality:${this.nationality}`;
  }
}

let taro: Person = new Person('taro', 22,'Japan');
let keiko: Andoroid = new Andoroid('Keiko', 25,'Chinese');

console.log(taro.name);
console.log(taro.profile());
console.log(keiko.name);
console.log(keiko.profile());
// console.log(taro.age)
// console.log(taro);
// console.log(taro.profile());
