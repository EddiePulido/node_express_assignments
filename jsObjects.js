let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


function printStudents(arr){
    for (var i = 0; i < arr.length; i++) {
        console.log("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort);
    }
}



let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'copy},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


 function printEmployees(ob){
    console.log("EMPLOYEES");
    for (var i = 0; i < ob.employees.length; i++) {
        var nameLength = ob.employees[i].first_name.length + ob.employees.last_name.length;
        console.log((i+1) + " - " + ob.employees[i].last_name + ", " + ob.employees[i].first_name + " - " + nameLength);
    }
    console.log("MANAGERS")
    mans = ob.managagers;
    for (var i = 0; i < mans.length; i++) {
        fname = mans[i].first_name;
        lname = mans[i].last_name;
        nameLength = fname.length + lname.length;

        console.log((i+1) + " - " + lname + ", " + fname + " - " + nameLength);
    }
 }