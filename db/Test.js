let mysql = require('mysql');

let todayStart = function () {
  let now = new Date();
  return new Date(now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' 00:00:00').getTime();
};

// let sql = "INSERT INTO Test (name, email, n) VALUES ?";
let sql = "insert into change_history_1(uid, item, time, oldValue, newValue, reason) values ?";
let values = [
  [2000011, 1, 1231421541, 5, 6, 1]
];

let DAY = 24 * 3600 * 1000;
let SIX_MONTH = 180 * DAY;
let totalCount = 0;
let today = todayStart();

let param = [];
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

for (let i = 0; i < 4; ++i) {
  console.log(`i:${i}`);
  for (let j = today - SIX_MONTH; j < today; j += DAY) {
    for (let m = 0; m < 200; ++m) {
      param.push([2000011, 1, j, 5, 6, 1]);
    }
  }

  conn.query(sql, [param], function (err, data) {
    console.log(`data:%j, err:%j`, data, err);
    conn.end(function(err, data){
      console.log(`[end] err:%j, data:%j`, err, data);
    });
  });
}
