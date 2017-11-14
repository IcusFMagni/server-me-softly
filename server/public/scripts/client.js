var employees = []
var totalCost = 0;
var employeeIndex = 0;
var maxCost= 1000000;
var t = 0;

var firstNames = ['John', 'Sally', 'Salty', 'Amber', 'Quartz', "Bibity", 'Kattan', '0010001011' , 'Unit', 'Captain', 'Gonzo', 'Kermit', 'Oglafina', 'Bluster', 'Akbar', 'Jean Luc', 'William', 'Troi', 'Elana', 'Christo', 'Folstead'];
var lastNames = ['Picard','Simpson', 'Ryker'];
var titles = ['King', 'Queen', 'Ruler', 'Monarch', 'Catcher', 'Band Manager', 'Ringer of Bells', 'Keeper of Stones', 'Khaleesi', 'Warbler', 'Frog Catcher', 'Cat Scratcher', 'X-filer', 'Figure of an imagination'];

$(document).ready(onReady);

function onReady() {
  
    $table = $('<table></table>');
    $table.append('<thead><tr><th>Name</th><th width="150">ID</th><th width="250">Title</th><th width="200">Salary</th><th width="100">DELETE</th></thead>')
  
    $tbody = $('<tbody id="tableBody"></tbody>');
    $table.append($tbody);
  
    $('.container').append($table);

    $('body').on('click', ".deleter", deleteEmployeeDoer);
    $("#submitInfoInput").on('click', submitInfo);
    $('#randomPerson').on('click', createRandom);
}

function deleteEmployeeDoer () {
    $(this).closest('tr').remove();
    adde = this.id;
    employees[adde].salary = 0;
    costCalculator();
    $('#totalCost').html('Total Cost of Human Property: $'+totalCost)
    // console.log(employees.find()
};


function submitInfo () {
    var employee = new Info();
    employees.push(employee)

    costCalculator();
    $('#totalCost').html('Total Cost of Human Property: $'+totalCost)
    
    employeePrint()

}

function costCalculator () {
    totalCost = 0
    for (var i = 0; i < employees.length; i++) {
        totalCost += Number((employees[i].salary/12).toFixed(2));
        
    }
    // screenDarkness();
}

function Info () {

    this.name= ($("#firstNameInput").val() + " " + $("#lastNameInput").val());
    this.id = $('#idNumberInput').val();
    this.title = $("#jobTitleInput").val();
    this.salary = $("#annualSalaryInput").val();
    this.added = employeeIndex;
    employeeIndex++

}

function employeePrint () {

    var emp = employees [employees.length-1]

    $('#tableBody').append('<tr><td>'+emp.name +'</td><td>'+emp.id+'</td><td>'+emp.title+'</td><td>$'+emp.salary+'</td><td><button id = '+emp.added+' class="deleter">Delete</button></td></tr>')
    $('#firstNameInput').val('')
    $('#lastNameInput').val('')
    $('#idNumberInput').val('')
    $('#jobTitleInput').val('')
    $('#annualSalaryInput').val('')


}


function createRandom() {
    var employee = new Random();
    employees.push(employee)

    costCalculator();
    $('#totalCost').html('Total Cost of Human Property: $'+totalCost)
    
    employeePrint();
    // screenDarkness();
    
}

function Random () {
    this.name = firstNames[Math.floor(Math.random()*(firstNames.length))] +' '+lastNames[Math.floor(Math.random()*(lastNames.length))];
    this.id = Math.floor(Math.random()*6592);
    this.title = titles[Math.floor(Math.random()*(titles.length))];
    this.salary = Math.floor(Math.random()*10000000)/100;
    this.added = employeeIndex;
    employeeIndex++
 
}

function screenDarkness () {
    if (totalCost > maxCost) {
    $('body').css("background-color", "black")}
    else {
        var t = totalCost/maxCost;
        $('body').css("background-color", "rgb("+t+"*255, "+t+"*254, "+t+"*242)");
    };
}
    
