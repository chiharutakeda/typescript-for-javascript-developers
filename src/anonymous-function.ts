export {};

//変数bmiの型定義をしてその後実際に型定義をした関数を代入している。
//正直わかりにくすぎだろ。。
let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.79, 65));
