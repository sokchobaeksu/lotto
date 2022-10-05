
let myTable = document.querySelector('#table');

//let prizeNo=[9,14,34,35,41,42,2]
//document.getElementById("number").innerHTML=prizeNo

let prize = [
    ["1등",8,"3,231,193,735"],
    ["2등",71,"60,679,695"],
    ["3등","2,848","1,512,732"],
    ["4등","2,848","1,512,732"],
    ["5등","2,848","1,512,732"]
]

let headers = ['순위','담첨게임수','1게임당 당첨금액'];

// btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    prize.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    });

    myTable.appendChild(table);
// });