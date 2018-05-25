var employees = [{name: "Alena Padsekina", team: "HTML5/IFE"},
                {name: "Sergey Bondar", team: "Main releases"},
                {name: "Maxim Marasanau", team: "CBC"},
                {name: "Volha Lenkevich", team: "Main releases"},
                {name: "Dmitry Minin", team: "CBC"},
                {name: "Dmitry Bashlak", team: "HTML5/IFE"},
                {name: "Denis Podgorny", team: "Main releases"}];

function selectTeam() {
    var team = document.getElementById("teams").value;                     // select the team in "Teams" dropdown

    function defineGroup() {                                               // create "Members" dropdown, populated with employees, according to the selected team
        function defineTeamMembers(team) {                                 // Create an array with employees
            var group = [];
            for (var i = 0; i < employees.length; i++) {
                if (employees[i].team == team) {
                    group.push(employees[i]);
                }
            }
            console.log(group);

            function populateDropdown() {                                   // Populate "Members" dropdown with employees, according to the selected team
                function cleanDropdown() {                                  // clear "Members" dropdown from the results of the previous selection
                    var oldGroup = document.getElementById("teamMembers");
                    while (oldGroup.firstChild) {
                        oldGroup.removeChild(oldGroup.firstChild);
                    }
                }
                cleanDropdown();

                function populateTeamMembers() {                             // create rows in "Members" dropdown and populate them with employees names frop the array
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
    }
    defineGroup();
}