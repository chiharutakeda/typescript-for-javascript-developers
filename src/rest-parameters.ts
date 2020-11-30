export {};

const reducer = (accumulator: number, currentValue: number) => {
  return currentValue + accumulator;
};
//相当便利そう。引数をいくらでも取れる。
const sum: (...values: number[]) => number = (...values: number[]): number => {
  //渡された値はvaluesとして扱えるの面白い
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
