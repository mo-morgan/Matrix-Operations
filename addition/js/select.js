function setMatrices() {
    const row = document.getElementById("rowID").value;
    const column = document.getElementById("columnID").value;
    const plusOrMinus = document.getElementById("plusMinus").value;
    //clearing and setting matrices
    document.getElementById("matrixTable").innerHTML = '';
    document.getElementById("solution").innerHTML = '';
    makeTable1(row, column);
    makeOperation(plusOrMinus);
    makeTable2(row, column);
    makeSubmit();
}

function makeTable(row, column, tableID) {
    document.getElementById("enter").innerHTML = "Please enter your matrix values: ";
    const theader = '<table align="center" id=' + tableID + '>';
    let tbody = '';
    let boxID;
    for(let i=0; i<row; i++) {
        tbody += '<tr>';
        for(let j=0; j<column; j++) {
            boxID = '';
            boxID += 'r' + i + 'c' + j;
            tbody += '<td>';
            tbody += '<input type="text" size="2" maxlength="20" class="required" id=' + boxID + tableID + '>';
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
    const submit = '<button type="button" onclick=validateForm()>Submit</button>';
    document.getElementById("matrixTable").innerHTML += '<br>' + submit;
}