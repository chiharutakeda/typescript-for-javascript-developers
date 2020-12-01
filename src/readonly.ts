export{};

class VisaCard {
  //読み取り専用
  // public readonly owner:string;

  //初期化もできるし読み取り専用にもできる。変則的な書き方だが覚えておきたい
  constructor( public readonly owner:string){
    // this.owner = owner
  }

}

let myVisaCard = new VisaCard('chiharu')

console.log(myVisaCard.owner)

// myVisaCard.owner = "takeda"