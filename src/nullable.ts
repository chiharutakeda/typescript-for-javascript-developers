export {};

//tsconfig のコンパイルオプションでnullをいれることができるようになるが
//そんなことはしてはいけない


let profile: {
  name: string;
  //ageはnullをきょうようできるようになる。
  age: number|null;
} = {
  name: `hame`,
  age: null,
};
