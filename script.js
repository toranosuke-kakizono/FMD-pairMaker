'use strict'

//テーブル作成(DAY2~DAY20)
const pairTable = document.getElementById("pair_table");

//重複のないランダムな配列を作成
const numbers = numbersMaker(20);

//DAY1~20まで作成
for (let i = 0; i < 20; i++) {
    const th = document.createElement("th");
    th.id = `DAY${i + 1}`;
    th.innerText = `DAY${i + 1}`;

    // const DAY = document.createElement("td");
    // DAY.class = 'DAY';
    // DAY.innerText = `DAY${i + 1}`;

    // th.append(DAY);
    const DAY1 = document.getElementById("DAY");
    DAY1.appendChild(th);
}


addPairToDate(15);


//引数の数だけpairMakerでペアを作り、day1~20まで追加！
/**
 * 
 * @param {Number} numberOfPairs ペアの人数
 */
function addPairToDate(numberOfPairs) {
    for (let i = 0; i < 20; i++) {
        const th_DAY = document.getElementById(`DAY${i + 1}`);
        const nodeArr = pairMaker(numberOfPairs);
        // console.log(nodeArr);
        for (const node of nodeArr) {
            th_DAY.appendChild(node);
        }
    }
}

/**
 * 重複がなく、ランダムで入った名前の配列を返す関数
 * @param {Number} numberOfPairs 
 * @returns {Array}
 */
function pairMaker(numberOfPairs) {
    //重複のないランダムな配列を作成
    const numbers = numbersMaker(numberOfPairs);
    const nodeArr = [];
    for (let i = 0; i < numberOfPairs; i++) {
        const td_pair = document.createElement("td");
        td_pair.class = 'pair';
        td_pair.id = `pair${i + 1}`;
        td_pair.innerText = `${numbers[i]}`;
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
 * 0~引数までの数値を1つずつ不順で配列に格納し、その配列を返す
 * @param {Number} num 
 * @returns {Array<Number>}
 */
function numbersMaker(num) {
    const numbers = [];
    while (numbers.length < num) {
        const randomNum = randomNumber(num);
        if (numbers.indexOf(randomNum) === -1) numbers.push(randomNum);
    }
    return numbers;
}
