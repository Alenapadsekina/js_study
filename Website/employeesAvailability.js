var employees = [
    {
        name: "Alena Padsekina",
        team: "HTML5/IFE"
    },
    {
        name: "Sergey Bondar",
        team: "Main releases"
    },
    {
        name: "Maxim Marasanau",
        team: "CBC"
    },
    {
        name: "Volha Lenkevich",
        team: "Main releases"
    },
    {
        name: "Dmitry Minin",
        team: "CBC"
    },
    {
        name: "Dmitry Bashlak",
        team: "HTML5/IFE"
    },
    {
        name: "Denis Podgorny",
        team: "Main releases"
    }
];


function cleanDropdown() { // clean previously filled 'Members' dropdown
    var oldGroup = document.getElementById("teamMembers");
    while (oldGroup.firstChild) {
        oldGroup.removeChild(oldGroup.firstChild);
    }
}

function cleanOldResult() { // erase the previously created table or error message
    var oldTable = document.getElementById("reportTable");
    while (oldTable.firstChild) {
        oldTable.removeChild(oldTable.firstChild);
    }
    var oldError = document.getElementById("errorMessage");
    while (oldError.firstChild) {
        oldError.removeChild(oldError.firstChild);
    }
}


function defineGroup() { // create an array containing team members
    var team = document.getElementById("teams").value;
    var group = [];

    function defineTeamMembers(team) { // populate 'group' array with corresponding team members

        for (var i = 0; i < employees.length; i++) {
            if (employees[i].team == team) {
                group.push(employees[i]);
            }
        }

        console.log(group);

        function populateDropdown() {

            cleanDropdown();

            function populateTeamMembers() { // create lines in 'Members' dropdown and popoulate them with group members
                for (var i = 0; i < group.length; i++) {
                    var option = document.createElement("option");
                    option.text = group[i].name;
                    option.value = group[i].name;
                    var select = document.getElementById("teamMembers");
                    select.appendChild(option);
                }
            }
            populateTeamMembers();
        }
        populateDropdown();

    }

    defineTeamMembers(team);

    return group;
}



function createTable() { // create a table corresponding to the selected team
    console.log("inside create table");
    var group = defineGroup();

    for (var i = 0; i < group.length; i++) {
        var table = document.getElementById("reportTable");
        var row = table.insertRow(i);
        var nameCell = row.insertCell(0);
        var statusCell = row.insertCell(1);
        nameCell.innerHTML = group[i].name;
        var person = group[i].name.split(" ");
        if (person[1].length % 2 == 0) {
            statusCell.innerHTML = "Available";
            statusCell.classList.add("available");
        } else {
            statusCell.innerHTML = "Not available";
            statusCell.classList.add("notAvailable");
        }
    }
    var table = document.getElementById("reportTable");
    var headerRow = table.insertRow(0);
    headerRow.innerHTML = "Employees availability";
    headerRow.classList.add("headerRow");
}




var errorMessage;

function validation(errorMessage) { // create error message
    var error = document.createTextNode(errorMessage);
    var div = document.getElementById("errorMessage");
    div.appendChild(error);
    div.classList.add("errorMessage");
    console.log("error OK");
}



function selectTeam() { // populate 'Members' dropdown
    defineGroup();
}



function generateReport() { // show report: a table or error message

    cleanOldResult();
    console.log("clean old result OK");
    var team = document.getElementById("teams").value;

    switch (team) {
        case "":
            errorMessage = "Please define a team";
            validation(errorMessage);
            break;
        case "HTML5/IFE":
        case "Main releases":
        case "CBC":
            createTable();
            console.log("create table OK");
            break;
        default:
            errorMessage = "No data found";
            validation(errorMessage);
            break;
    }
}