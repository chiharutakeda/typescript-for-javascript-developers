export {};

// *owner
//  *所有者
//  *初期化時に設定できる
//  *途中で変更できない
//  *参照できる
// *secretNumber
//  *個人番号
//  *初期化時に設定できる
//  *途中で変更できる
//  *参照できない

//変更できるや参照できるできない等の設定を考えることが必要になる。

class MyNumberCard {
  //アンダースコアつけてリネームしがちらしい
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumbeer: number) {
    this._owner = owner;
    this._secretNumber = secretNumbeer;
  }

  //値を参照したい時get 
  get owner() {
    return this._owner;
  }

  //値を設定したいときset
  set secretNumber(secretNumbeer: number) {
    this._secretNumber = secretNumbeer;
  }

  debugPring(){
    return `secretNumber: ${this._secretNumber}`
  }
}

const card = new MyNumberCard('chiharu', 123456789);
console.log(card.debugPring());
//()をつけて呼び出さない
console.log(card.owner);

//()をつけて呼び出さない
card.secretNumber = 111111111;
console.log(card.debugPring());

console.log(card.secretNumber);
