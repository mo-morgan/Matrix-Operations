function setMatrices() {
    const row = document.getElementById("rowID").value;
    const column = document.getElementById("columnID").value;
    const plusOrMinus = document.getElementById("plusMinus").value;
    //clearing and setting matrices
    document.getElementById("matrixTable").innerHTML = '';
    makeTable1(row, column);
    makeOperation(plusOrMinus);
    makeTable2(row, column);
    makeSubmit();
//    test
    document.getElementById("matrixTable").innerHTML += '<p id="test"></p>';
}

function makeTable(row, column, tableID) {
    document.getElementById("enter").innerHTML = "Please enter your matrix values: ";
    const theader = '<table align="center" id=' + tableID + '>';
    let tbody = '';
    for(let i=0; i<row; i++) {
        tbody += '<tr>';
        for(let j=0; j<column; j++) {
            tbody += '<td>';
            tbody += '<input type="text" size="2" maxlength="20">';
            tbody += '</td>';
        }
        tbody += '</tr>\n';
    }
    const tfooter = '</table>';
    document.getElementById("matrixTable").innerHTML += theader + tbody + tfooter;
}

function makeTable1(row, column) {
    makeTable(row, column, "table1")
}

function makeTable2(row, column) {
    makeTable(row, column, "table2")
}

function makeOperation(plusOrMinus) {
    document.getElementById("matrixTable").innerHTML += plusOrMinus;
}

function makeSubmit() {
    const submit = '<button type="button" onclick=showTableData()>Submit</button>';
    document.getElementById("matrixTable").innerHTML += '<br>' + submit;
}