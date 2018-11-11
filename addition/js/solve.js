let isValid;

function validateForm() {
    isValid = true;
    containsAllRequiredInputs();
    if(!isValid) {
        return;
    }

    showTableData()
}

function containsAllRequiredInputs() {
    $('.required').each(function () {// isNaN only checks for number, need regex to support +-/*()[]^ operators
        if($.trim($(this).val()).length==0|| isNaN($.trim($(this).val()))) {
            isValid = false;
            $(this).css({
                "border": "1px solid red",
                "background": "#FFCECE"
            });

        } else {
            $(this).css({
                "border": "",
                "background": ""
            })
        }
    });
}

function showTableData() {
    document.getElementById("solution").innerHTML = "";
    document.getElementById("solution").innerHTML += '<br>';
    document.getElementById("solution").innerHTML += "<h3>Solution:</h3>";
    document.getElementById("solution").innerHTML += '<br>';
    addTableValues();
}

function addTableValues() {
    const rows = document.getElementById("table1").rows.length;
    const columns = document.getElementById("table1").rows[0].cells.length;

    const theader = '<table align="center" id="tableSolution" class="matrix">';
    let tbody = '';
    for(i=0; i<rows; i++) {
        tbody += '<tr>';
        for(j=0 ;j<columns; j++) {
            tbody += '<td>';
            let num;
            if (document.getElementById("plusMinus").value == "+")
                num = parseInt(document.getElementById('r' + i.toString() + 'c' + j.toString() + 'table1').value, 10) + parseInt(document.getElementById('r' + i.toString() + 'c' + j.toString() + 'table2').value, 10);
            else
                num = parseInt(document.getElementById('r' + i.toString() + 'c' + j.toString() + 'table1').value, 10) - parseInt(document.getElementById('r' + i.toString() + 'c' + j.toString() + 'table2').value, 10);
            tbody += num;
            tbody += '</td>';
        }
        tbody += '</tr>\n'
    }
    const tfooter = '</table>';
    document.getElementById("solution").innerHTML += theader + tbody + tfooter;
function mathOperation(value) {

    return 0;
}