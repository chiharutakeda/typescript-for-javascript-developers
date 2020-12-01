export {};
//型アサーションより早く型を示すことができる
let name: any = 'ham';

// let length= (<string>name).length

//上のアサーションもできるがasのほうがjsxと見間違えにくいためこちらを推奨らしい
let length= (name.length as number)

// length = 'foo'

console.log(length)
