export {};

class Person {
  // public name: string;
  // public age: number;

  //コンストラクターの引数でpublic,protectedを加えると自動で初期化できる。
  //知らんかったらどうしようもないやん。。。
  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('chiharu', 29);

// console.log(me.name)
// console.log(me.age)
console.log(me);
