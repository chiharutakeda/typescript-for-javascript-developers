export {};

//関数の返り値がない時の型指定でvoidが使える
function returnNothing(): void {
  console.log('I dont return anything');
  // return undefined;
}

console.log(returnNothing());
