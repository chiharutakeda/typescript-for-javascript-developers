export{};

//抽象クラス　メソッドの実装忘れを防ぐ
//クラスも抽象化する。
abstract class Animal {
  //メソッドも抽象化する。
  abstract cry():string;
}

class Lion extends Animal{
  cry(){
    return 'roar';
  }
}

class Tiger extends Animal{
  cry(){
    return 'grrr'
  }
}