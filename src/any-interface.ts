import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then((response) => {
  //オブジェクトの中身を定義したいときにinterfaceを使う
  // interface Article {
  //   id: number;
  //   title: string;
  //   description: string;
  // }
  // let data: Article[];
  //何でもアリ型（使うとtypescriptの意味なくなるのでできるだけ使わない）
  let data: any;
  data = response.data;
  // data = [
  //   {
  //     id: 1,
  //     title: 'title',
  //     description: 'description',
  //   },
  // ];
  console.log(data);
});
