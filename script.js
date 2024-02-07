"use strict";

//テーブル作成(DAY2~DAY20)
const pairTable = document.getElementById("pair_table");

//重複のないランダムな配列を作成
// const numbers = arrayOfPairNumber(20);

//DAY1~20まで作成
for (let i = 0; i < 20; i++) {
  const tableHeader = document.createElement("th");
  tableHeader.className = "DAY";
  tableHeader.id = `DAY${i + 1}`;
  tableHeader.innerText = `DAY${i + 1}`;

  const day1 = document.getElementById("DAY");
  day1.appendChild(tableHeader);
}

addPairToDate(15);

//引数の数だけtableDataTagMakerでペアを作り、day1~20まで追加！
/**
 *
 * @param {Number} numberOfPeople ペアの人数
 */
function addPairToDate(numberOfPeople) {
  for (let i = 0; i < 20; i++) {
    const th_day = document.getElementById(`DAY${i + 1}`);
    const nodeArr = tableDataTagMaker(numberOfPeople);
    // console.log(nodeArr);
    for (const node of nodeArr) {
      th_day.appendChild(node);
    }
  }
}

/**
 * 重複がなく、ランダムで入った名前の配列を返す関数
 * @param {Number} numberOfPeople
 * @returns {Array}
 */
function tableDataTagMaker(numberOfPeople) {
  //重複のないランダムなペア配列が入った配列を作成
  const numbers = arrayOfPairNumber(numberOfPeople);
  const nodeArr = [];
  for (let i = 0; i < numbers.length; i++) {
    const td_pair = document.createElement("td");
    td_pair.className = "pair";
    td_pair.id = `pair${i + 1}`;
    td_pair.innerText = `${numbers[i].join(" & ")}`;
    td_pair.style.display = "block";
    nodeArr.push(td_pair);
  }
  return nodeArr;
}

/**
 * 0~引数までのランダムな数値を作成して返す
 * @param {Number} num
 * @returns {Number}
 */
function randomNumber(num) {
  return Math.ceil(Math.random() * num) - 1;
}

/**
 * 0~引数までの重複のない数値を使ってペアの配列を作り、配列に格納して返す。
 * 奇数の場合は、配列の先頭を3人組にして返す。
 * @param {Number} num
 * @returns {Array<Number>}
 */
function arrayOfPairNumber(num) {
  const numbers = [];
  const pairNumbers = [];

  // 重複を取り除いた数字の配列を作成
  while (numbers.length < num) {
    const randomNum = randomNumber(num);
    if (numbers.indexOf(randomNum) === -1) numbers.push(randomNum); // 短絡評価？
  }

  // indexが1, 2をペアに、3, 4をペアに、5, 6を...
  for (let i = 0; i < numbers.length; i += 2) {
    const pair = [];
    pair.push(numbers[i], numbers[i + 1]);
    pairNumbers.push(pair);
  }

  //　奇数だった場合に3人ペアを作成する
  if (num % 2) {
    pairNumbers[0].push(pairNumbers.pop()[0]);
  }

  return pairNumbers;
}

console.log("tora");
// test(arrayOfPairNumber(9).length, 4);
// test(arrayOfPairNumber(10).length, 5);
