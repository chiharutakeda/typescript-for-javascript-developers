export {};

//anyは使いたくないけどふわっと型は決めたいときにunknownを使える。
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumany = numberAny + 10;
console.log(typeof numberUnknown);
//このif文でnumber型が確定しているためコンパイルエラーとして出さないタイプガードといわれる。
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
