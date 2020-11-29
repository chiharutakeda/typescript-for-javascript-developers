export {};

//型を代入するので＝が必要
type ObjectType = {
  name: string;
  age: number;
};

//interfaceに＝は不要
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'ham-san',
  age: 43,
};
