// Test Data
datas = [
  {id:1, title:'タイトル1',body:'テスト1'},
  {id:2, title:'タイトル2',body:'テスト2'},
  {id:3, title:'タイトル3',body:'テスト3'},
  {id:4, title:'タイトル4',body:'テスト4'},
  {id:5, title:'タイトル5',body:'テスト5'},
  {id:6, title:'タイトル6',body:'テスト6'},
  {id:7, title:'タイトル7',body:'テスト7'},
]

// IDが存在するかチェックする。
const chkExistId = (chkData) => {
  return datas.find((data) => {
    return data.id === chkData.id
  })
}

// IDを生成して返す
const createId = (data) => {
  // スマートではないが、datasとの参照を切る。
  let lists = JSON.stringify(datas)
  lists = JSON.parse(lists);

  lists = sort(lists);
  const id = lists[0].id + 1
  data.id = id;
  return data;
}

// 大きい順でソートする。
const sort = (lists) =>{
  return lists.sort((a, b) => {
    return b.id - a.id
  })
}

module.exports.datas = datas;
module.exports.chkExistId = chkExistId;
module.exports.createId = createId;
