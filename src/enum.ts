export {};

enum Months {
  //列挙の連番の開始位置を決める事ができる
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BRUE = '#0000FF',
  BLACK = '#000000',
}
//後から追加できる
enum COLORS{
  YELLOW = '#FFFF00'
}
console.log(COLORS.RED)
console.log(COLORS.YELLOW)
