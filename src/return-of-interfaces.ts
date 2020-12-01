export{};

//typescriptはクラスを二つ継承できないが継承のようなことができる。実装というらしい
//多用しそう
class Mahoutsukai{}
class souryo{}

class Taro extends Mahoutsukai{}

//実装わすれをなくせる。
interface Kenja {
  ionazun():void;
}
interface Senshi {
  kougeki():void;
}
//kenja senshiから継承されている。
//継承元のメソッド実装わすれとか防げる
class Jiro implements Kenja,Senshi{
  ionazun():void {
    console.log('ionazun')
  };
  kougeki():void{
    console.log('kougeki')
  };
}

const jiro = new Jiro();
jiro.ionazun()
jiro.kougeki()
