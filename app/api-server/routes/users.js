const express = require('express');
const router = express.Router();
const test = require('../public/javascripts/data');

// 全てのデータ
router.get('/', (req, res, next) => {
  res.json(test.datas);
});

// データ詳細
router.get('/:id', (req, res, next) => {
  // GETリクエストされたパラメータと合致するデータを抽出する。
  const resData = test.datas.filter((data) => {
    return req.params.id == data.id
  })
  res.json(resData[0]);
});

// データ作成
router.post('/', (req, res, next) => {
  // postされたデータをマージする。
  let data = Object.assign(
    {id: null, title: null},req.body)

  if(data.id === null){
    // POSTされたデータの中にIDがない場合にデータのIDを準備しておく。
    data = test.createId(data);
  } else {
    const isExist = test.chkExistId(data);
    if(isExist != null){
      res.send('id exist!')
      return
    }
  }
  // データを追加する。
  test.datas.push(data)
  res.json(test.datas)
})

router.put('/:id',(req, res, next) => {
  // PUTリクエストされたパラメータと合致するデータのインデックスを抽出する。
  const index = test.datas.map((data, i) => {
      return data.id + ''
  }).indexOf(req.params.id + '')
  if(index == -1){
    res.send('data no exist!');
    return
  }
  console.log(req)
  // データを更新する。
  test.datas[index] = {
    id: req.params.id,
    title:req.body.title
  }
  res.json(test.datas)
})

router.delete('/:id',(req, res, next) => {
  // DELETEリクエストされたパラメータと合致するデータのインデックスを抽出する。
  const index = test.datas.map((data, i) => {
      return data.id + ''
  }).indexOf(req.params.id + '')
  if(index == -1){
    res.send('data no exist!');
    return
  }
  // データを削除する。
  test.datas.splice(index, 1)
  res.json(test.datas)
})

module.exports = router;
