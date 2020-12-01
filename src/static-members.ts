export {};

class ME {
  static isProgrammer:boolean = true;
  static firstName:string = 'chiharu';
  static lastName:string = 'takeda';

  static work(){
    return `Hey guys this is ${this.firstName}`
  }
}

// let me = new ME()

//静的メンバーはインスタンスを作成しなくても呼び出せる
//むしろインスタンスから呼ぶことはできない
console.log(ME.isProgrammer)
console.log(ME.work())
