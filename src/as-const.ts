export{}

//constアサーション
let name = 'Atsushi';

name = 'ham'

//ham以外入らないようにできる
let nickname = 'ham' as const
nickname = 'ham'

//readonlyなオブジェクトにできる（一個一個にreadonly書く必要がない）
//ネストされている所も全てreadonlyになる
//めちゃめちゃ便利らしい
let profile = {
  name:'Atushi',
  height:178
} as const

// profile.name="uuuu"
// profile.height=1999

