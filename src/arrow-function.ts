export {};

//型定義した変数に型定義した関数を代入している
//くそ見にくい。
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.78, 88));
