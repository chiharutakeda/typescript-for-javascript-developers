export {};

//namespaceを使うと別フォルダに置くような感じになるのでクラスの名前が被っても問題ない
namespace Japanese{
  
  export namespace Tokyo{
    //エクスポートするの忘れないようにする。
    export class Person {
      constructor(public name: string) {}
    }
  }
  //ここもエクスポートする。
  export namespace Osaka{
    //エクスポートするの忘れないようにする。
    export class Person {
      constructor(public name: string) {}
    }
  }

}

namespace English {
  export class Person {
    constructor(
      public name: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}
// console.log(English)
//名前空間の中の名前空間の中のクラスというような指定ができる
const me = new Japanese.Tokyo.Person('chiharu');
const mu = new Japanese.Osaka.Person('chiharu');
const michel = new English.Person('michel','joseph','jackson');
console.log(me);
console.log(mu);
console.log(michel);
