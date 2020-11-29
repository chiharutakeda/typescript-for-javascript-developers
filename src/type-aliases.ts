export {};

//型に別名をつける。大文字で始める
type Mojitetsu = string;

const fooString: string = 'hello';

const fooMojiretsu: Mojitetsu = 'hello';

const example1 = {
  name: 'ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2:Profile= {
  name: 'hello',
  age: 44,
};

//型を抽出できる
type Profile2 = typeof example1