export{};
//継承について
class Animal {
  constructor(public name:string){}
  run():string{
    return `${this.name} can run`
  }
}

class Lion extends Animal{
  //継承先で初期化する
  public speed:number;

  //speedは継承先のクラスにしかないのでここで初期化
  //親のコンストラクターが呼ばれた後子コンストラクターが実行される
  constructor(name:string ,speed:number){
    super(name)
    this.speed = speed
  }
  run():string{
    //superで親のメソッドを呼び出せる
    return `${super.run()} ${this.speed}km`
  }
}

console.log(new Animal('mickey').run())
console.log(new Lion('simba',90).run())