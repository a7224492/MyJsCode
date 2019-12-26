// 麻将转换
function cardValues2CardIds(cardValues) {
  let cardIds = [];
  for (let cardValue of cardValues) {
    let cardId = (10 + cardValue) * 4;
    if (cardIds.indexOf(cardId) !== -1) {
      ++cardId;
    }

    cardIds.push(cardId);
  }

  return cardIds;
}

let target = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,13,15,18,19,24,26,12,5,6,7,12,11,8,6,8,9,12,13,13,17,18,19,25,28,29,29,9,9,16,17,18,12,27,27,15,25,21,12,7,7,13,18,17,26,26,25];
let result = cardValues2CardIds(target);
// console.log(target.length);
console.log(result.join(','));