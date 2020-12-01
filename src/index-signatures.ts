export {};
//インデックスシグネチャー

interface Profile {
  name: string;
  underTwnty: boolean;
  //インデックスシグネチャー
  //keyの種類とvalueの組み合わせの型定義以下の条件であれば
  //後から追加できる。
  [index: string]: string | number | boolean;
  [index: number]: number;
}

let profile: Profile = {
  underTwnty: false,
  name: 'ham',
};

//how to write index signatures
//{ [index:typeForIndex ]:typeForValue}

profile.name = 'ham';
//interfaceに存在しないプロパティを設定できる。
profile.age = 43;
profile.nationality = 'Japan';
profile[4] = 190
console.log(profile[5])
console.log(profile[4])
