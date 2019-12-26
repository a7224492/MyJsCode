let mysql = require('mysql');

let todayStart = function () {
  let now = new Date();
  return new Date(now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' 00:00:00').getTime();
};

// let sql = "INSERT INTO Test (name, email, n) VALUES ?";
let ids = [1,2,3,4,5];
let states = [2,4,4,2,2];
let reasons = ["直播内容不符合","直播时长不符合","直播时长不符合","直播内容不符合","直播内容不符合"];
let values = [];
for (let i = 0; i < ids.length; ++i) {
  values.push(`(${ids[i]}, ${mysql.escape(states[i])}, ${mysql.escape(reasons[i])})`);
}
let sql = `insert into liver_apply_record (id, state, reason) values ${values.join(',')} on duplicate key update state=values(state),reason=values(reason)`;

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'test_rw',
  password: 'test_rw',
  database: 'landlord'
});

// console.log(JSON.stringify({
//   currentRoleId: 1,
//   currentSkinId: 101,
//   1: {
//     ownedSkins: [{
//       skinId: 101,
//       expired: -1,
//     }],
//     defaultSkinId: 101,
//     level: 1,
//     exp: 0,
//     bUnlock:1,
//     expired: -1
//   }
// }));
// let result = JSON.parse('{"1":{"ownedSkins":[{"skinId":101,"expired":-1}],"defaultSkinId":101,"level":1,"exp":0,"bUnlock":1,"expired":-1},"currentRoleId":1,"currentSkinId":101}');
// console.log('finish');

conn.query(sql, [], function (err, data) {
  console.log(`data:%j, err:%j`, data, err);
  conn.end(function(err, data){
    console.log(`[end] err:%j, data:%j`, err, data);
  });
});
