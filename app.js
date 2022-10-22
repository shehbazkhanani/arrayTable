var a =[{
    name : "shehbaz",
    id : 1,
    rollNo: "100",
    ispass : false,
    marks : 40
},{
    name : "mubashir",
    id : 2,
    rollNo: "101",
    ispass : true,
    marks : 60
},{
    name : "zain",
    id : 3,
    rollNo: "103",
    ispass : true,
    marks : 80
},{
    name : "hafeez",
    id : 4,
    rollNo: "104",
    ispass : false,
    marks : 30
},{
    name : "moiz",
    id : 5,
    rollNo: "105",
    ispass : false,
    marks : 10
},]

var tableBody = document.getElementById("arrayTable");
var input = document.getElementById("searchInp")
var DisplayRes = document.getElementById("displayRes")
var Name = document.getElementById("name")
var Roll = document.getElementById("roll")
var Result = document.getElementById("result")
var Marks = document.getElementById("marks")



for (var i = 0;  i < a.length; i++) {
    tableBody.innerHTML += `<tr> <td> ${a[i].name} </td>
    <td> ${a[i].rollNo} </td>
    <td> ${a[i].ispass} </td> <tr>`
}

function search() {
    for( i = 0; i < a.length; i++) {
        if(a[i].rollNo == input.value) {
         DisplayRes.style.display = "block"
         Name.innerHTML = a[i].name;
         Roll.innerHTML = a[i].rollNo;
         Result.innerHTML = a[i].Result;
         Marks.innerHTML = a[i].marks;
        }
    }
}