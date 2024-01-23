'use strict'

//テーブル作成(DAY2~DAY20)
const pairTable = document.getElementById("pair_table");

for (let i = 0; i < 20; i++) {
    //重複のないランダムな配列を作成
    const numbers = numbersMaker(20);

    const tr = document.createElement("tr");
    tr.id = `DAY${i + 1}`;

    const DAY = document.createElement("td");
    DAY.class = 'DAY';
    DAY.innerText = `DAY${i + 1}`;

    const pair = document.createElement("td");
    pair.class = 'pair';
    pair.innerText = `${numbers[i]}`;

    tr.appendChild(DAY);
    tr.appendChild(pair);
    pairTable.appendChild(tr);
}

//ランダムでペアを作成
function randomNumber(num) {
    return Math.ceil(Math.random() * num) - 1;
}


function numbersMaker(num) {
    const numbers = [];
    while (numbers.length < num) {
        const randomNum = randomNumber(num);
        if (numbers.indexOf(randomNum) === -1) numbers.push(randomNum);
    }
    return numbers;
}

// //randomNumberのテスト
// for (let i = 0; i < 10; i++) {
//     console.log(randomNumber(20));
// }
