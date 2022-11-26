//-----------------------------------------------


/// news ///
let pNews=document.getElementById(`news1`)
let pNews1=document.getElementById(`news2`)


function news(){
newsOne=[`Orange organized an employment week in the Orange Digital Village in Al-Abdali area to promote "training for employment`,`Success stories by graduates from the Coding Academy by Orange highlighting their own experience, what they learned in the academy, and their future projects.`]

for (i=0;i<=newsOne.length;i++){
    i = Math.floor((Math.random() * 2))
    return  newsOne[i]
    
}
}
function changeNews() {

    document.getElementById(`news1`).innerHTML = news();
}

setInterval(changeNews, 1000); 
// function news2(){
// newsTwo=[`We would like to thank our colleagues at Orange Jodan for their endless support in delivering many training courses and programs for the second cohort students of the Coding Academy and also we would like to thank our partners from different companies for their contenious support`,`Discover more about the second cohort graduation projects. The students did their projects with enthusiasm and passion to learn more, also they submitted their graduation projects and deliver it on time.`]

// for (i=0;i<=newsTwo.length;i++){
//     i = Math.floor((Math.random() * 2))
//     return  newsTwo[i]
    
// }
// }
// function changeNews2() {

//     document.getElementById(`news2`).innerHTML = news2();
// }

// setInterval(changeNews2, 1000); 


//--------------------------------------


let Students = JSON.parse(localStorage.getItem("Students")) || []
let Trainers = JSON.parse(localStorage.getItem("Trainers"))
const trid = JSON.parse(sessionStorage.getItem("loid"))
const name1 = JSON.parse(sessionStorage.getItem("loname"))
const mail = JSON.parse(sessionStorage.getItem("lomail"))
const phonee = JSON.parse(sessionStorage.getItem("lophone")) 
const photo = document.getElementById("trainerphoto")

var studentsId
var newbio
// var nameFeed ;
// var stufeed ;

document.getElementById('home1').innerHTML = "Hello , " + name1
    
Home = document.getElementById("home")
profile = document.getElementById("userProfile")
stud = document.getElementById("student")
atten = document.getElementById("attendance")
task = document.getElementById("task")
feed = document.getElementById("feed")
Home.style.display = "flex" 

if ( name1 == "mona" ){
    document.getElementById("trainerphoto").src = "./icon/mona.jpeg"
}
else if( name1 == "alaa" ){
    document.getElementById("trainerphoto").src = "./icon/alaa.jpeg"
}
else{
    document.getElementById("trainerphoto").src = "./icon/icon-256x256.png"
}


// add anew student
addstud = () => {
    document.getElementById('studcard').style.visibility = "visible"
    document.getElementById('StudentName').value = ""
}

saveStudent = () => {
    var stuId = Students.length  
    const stuName = document.getElementById('StudentName')

    Students.map((ele) =>{
    
        //Find index of specific object using findIndex method.    
        feedloc = Students.findIndex((ele => ele.id == stuId ));

        if ( ele.id > 0 && ele.id == stuId){
            stuId = ele.id + 1
        }
    });
    var obj1 = {
        id: stuId, 
        name: stuName.value, 
        atten: 'default', 
        task: 'default', 
        feed: 'default', 
        totaltask: 'default',
        totalday: 'default',
        coacTask: 'default',
        coachfeed: 'default',
        coachATTE: 'default',
    }

    Students.push(obj1)
    localStorage.setItem("Students", JSON.stringify(Students));
    document.getElementById("studcard").style.visibility = "hidden"
    show3();
}

// WELCOME PAGE
show1 = () =>{
    Home.style.display = "flex"
    stud.style.display = "none"
    atten.style.display = "none"
    task.style.display = "none"
    feed.style.display = "none"
    profile.style.display = "none"
    Home.class = "active"

    if ( name1 == "mona" ){
        document.getElementById("trainerphoto").src = "./icon/mona.jpeg"
    }
    else if( name1 == "alaa" ){
        document.getElementById("trainerphoto").src = "./icon/alaa.jpeg"
    }
    else{
        document.getElementById("trainerphoto").src = "./icon/icon-256x256.png"
    }
}

// TRAINER PROFILE
show2 = () =>{
    document.getElementById('traincard').innerHTML = name1
    document.getElementById('profname').innerHTML =  name1
    document.getElementById('email').innerHTML =  mail
    document.getElementById('phone').innerHTML =  phonee
    document.getElementById('traneridset').innerHTML = "ID : " + trid

    if ( name1 == "mona" ){
        document.getElementById("trainerphoto1").src = "./icon/mona.jpeg"
    }
    else if( name1 == "alaa" ){
        document.getElementById("trainerphoto1").src = "./icon/alaa.jpeg"
    }
    else{
        document.getElementById("trainerphoto1").src = "./icon/icon-256x256.png"
    }
    
    Home.style.display = "none"
    profile.style.display = "flex"
    stud.style.display = "none"
    atten.style.display = "none"
    task.style.display = "none"
    feed.style.display = "none"
    profile.class = "active"

}

// TABLE STUDENT INFORMAION
show3 = () =>{
    Home.style.display = "none"
    atten.style.display = "none"
    profile.style.display = "none"
    task.style.display = "none"
    feed.style.display = "none"
    stud.style.display = "flex"
    stud.class = "active"

    var table = "<table>"
    table+=`<tr><caption>${name1}</caption></tr>`
    table+=`<tr></tr>`

    table += "<tr>"
    table += "<th>" + "ID" + "</th>"
    table += "<th>" + "NAME" + "</th>" 
    table += "<th>" + "ATTENDANCE" + "</th>" 
    table += "<th>" + "TASKE" + "</th>"
    table += "<th>" + "FEEDBACK" + "</th>"
    table += "<th>" + "COACH" + "</th>"
    table += "<th>" + "EDITE" + "</th>"
    table += "<tr>"

    Students.map((ele) =>{
        table += "<tr>";
        table += "<td>" + ele.id + "</td>";
        table += "<td>" + ele.name + "</td>";
        table += "<td>" + ele.atten +' &rsaquo; '+ ele.totalday + "</td>" ;
        table += "<td>" + ele.task + ' &rsaquo; ' + ele.totaltask + "</td>" ;
        table += "<td>" + ele.feed + "</td>" ;
        table += "<td>" + ele.coachfeed + "</td>";
        table += "<td>" + `<button id='butdele' onclick="deletStudent(${ele.id})">Delete</button>` + "</td>" ;
        table += "<tr>"
    });
    table += "</tr>"
    document.getElementById('student-list').innerHTML = table;
}

// TABLE ATTENDANCE
show4 = () =>{
    Home.style.display = "none"
    feed.style.display = "none"
    profile.style.display = "none"
    stud.style.display = "none"
    task.style.display = "none"
    atten.style.display = "flex"
    atten.class = "active"

    var table = "<table>"
    table+=`<tr><caption>${name1}</caption></tr>`
    table+=`<tr></tr>`

    table += "<tr>"
    table += "<th>" + "ID" + "</th>"
    table += "<th>" + "NAME" + "</th>" 
    table += "<th>" + "ABSONT" + "</th>" 
    table += "<th>" + "ALL DAY" + "</th>"
    table += "<th>" + "COACH" + "</th>"
    table += "<th>" + "" + "</th>"
    table += "<tr>"

    Students.map((ele) =>{
        table += "<tr>";
        table += "<td>" + ele.id + "</td>";
        table += "<td>" + ele.name + "</td>";
        table += "<td>" + ele.atten + "</td>" ;
        table += "<td>" + ele.totalday + "</td>" ;
        table += "<td>" + ele.coachATTE + "</td>";
        table += "<td>" + `<button id='butfeed' onclick='shwatten(${ele.id})'>add</button>` + "</td>" ;
        table += "<tr>"
    });
    table += "</tr>"
    document.getElementById('attendance-list').innerHTML = table;
}

// TABLE TASKS
show5 = () =>{
    Home.style.display = "none"
    profile.style.display = "none"
    stud.style.display = "none"
    atten.style.display = "none"
    feed.style.display = "none"
    task.style.display = "flex"
    task.class = "active"

    var table = "<table>"
    table+=`<tr><caption>${name1}</caption></tr>`
    table+=`<tr></tr>`

    table += "<tr>"
    table += "<th>" + "ID" + "</th>"
    table += "<th>" + "NAME" + "</th>" 
    table += "<th>" + "TASK" + "</th>" 
    table += "<th>" + "ALL TASK" + "</th>"
    table += "<th>" + "COACH" + "</th>"
    table += "<th>" + "" + "</th>"
    table += "<tr>"

    Students.map((ele) =>{
        table += "<tr>";
        table += "<td>" + ele.id + "</td>";
        table += "<td>" + ele.name + "</td>";
        table += "<td>" + ele.task + "</td>" ;
        table += "<td>" + ele.totaltask + "</td>" ;
        table += "<td>" + ele.coacTask + "</td>"
        table += "<td>" + `<button id='butfeed' onclick='shwtask(${ele.id})'>add</button>` + "</td>" ;
        table += "<tr>"
    });
    table += "</tr>"
    document.getElementById('task-list').innerHTML = table;
}

// TABLE FEEDBACK
show6 = () =>{
    console.log("show6");
    Home.style.display = "none"
    profile.style.display = "none"
    stud.style.display = "none"
    atten.style.display = "none"
    task.style.display = "none"
    feed.style.display = "flex"
    profile.class = "active"


    var table = "<table>"
    table+=`<tr><caption>${name1}</caption></tr>`
    table+=`<tr></tr>`

    table += "<tr>"
    table += "<th>" + "ID" + "</th>"
    table += "<th>" + "NAME" + "</th>" 
    table += "<th>" + "FEEDBACK" + "</th>" 
    table += "<th>" + "COACH" + "</th>" 
    table += "<th>" + "" + "</th>"
    table += "<tr>"

    Students.map((ele) =>{
        table += "<tr>";
        table += "<td>" + ele.id + "</td>";
        table += "<td >" + ele.name + "</td>";
        table += "<td>"+  ele.feed + "</td>" ;
        table += "<td>"+  ele.coachfeed + "</td>" ;
        table += "<td>" + `<button id='butfeed' onclick='shwfeed(${ele.id})'>edit</button>` + "</td>" ;
        table += "<tr>"
    });
    table += "</tr>"
    document.getElementById('feed-back').innerHTML = table;
}

show7 = () => { window.open('./index.html')}

shwatten = (id) => {
    studentsId = id
    document.getElementById("boxinput1").style.visibility = "visible"
    document.getElementById('studattend').value = ""
    document.getElementById('allDay').value = ""
    return studentsId
}


shwfeed = (id) => {
    studentsId = id
    document.getElementById("boxinput3").style.visibility = "visible"
    document.getElementById('Studfedd').value = ""
    return studentsId
}

// DELET STUDENT NOT COMPLETE
shwtask = (id) => {
    studentsId = id
    document.getElementById("boxinput2").style.visibility = "visible"
    document.getElementById('studtask').value = ""
    document.getElementById('allTask').value = ""
    return studentsId
}

// SOW CONFIRM DELETE
function deletStudent(id){ 
    document.getElementById('deletcard').style.visibility = "visible"

    studentsId = id
    return console.log(studentsId)

}

function suredelet(){ 

    var retudele = studentsId
    console.log(retudele)
        
    const index = Students.findIndex((ele => ele.id == retudele ));

        //Update object's name property.
        Students.splice(index , 1)


        localStorage.setItem("Students", JSON.stringify(Students));
        document.getElementById('deletcard').style.visibility = "hidden"
        show3();
}

function notdelet(id){
    show3();
    document.getElementById('deletcard').style.visibility = "hidden"
    return id;
}



// ADD ATTENDANCE
function addatten(){ 
    var stuattenId = studentsId
    var stuatten = document.getElementById('studattend')
    var ALLatten = document.getElementById('allDay')
        if ( stuatten.value >=  ALLatten.value ){
            Students.map((ele) =>{
    
                //Find index of specific object using findIndex method.    
                feedloc = Students.findIndex((ele => ele.id == stuattenId ));
    
    
                //Update object's name property.
                Students[feedloc].atten = stuatten.value
                Students[feedloc].totalday = ALLatten.value
                Students[feedloc].coachATTE = name1
    
    
                localStorage.setItem("Students", JSON.stringify(Students));
                document.getElementById("boxinput1").style.visibility = "hidden"
                show4();
            });
        }
        else{
            alert("your task is not true")
        }
}

// ADD TASKS
function addtask(){ 
    var stuTASKId = studentsId
    var stuTASK = document.getElementById('studtask')
    var ALLTASK = document.getElementById('allTask')
    if ( stuTASK.value >=  ALLTASK.value ){
        Students.map((ele) =>{
    
            //Find index of specific object using findIndex method.    
            feedloc = Students.findIndex((ele => ele.id == stuTASKId ));

            //Update object's name property.
            Students[feedloc].task = stuTASK.value
            Students[feedloc].totaltask = ALLTASK.value
            Students[feedloc].coacTask = name1

            //Log object to console again.
            console.log(stuTASK.value)
            console.log(ALLTASK.value)

            localStorage.setItem("Students", JSON.stringify(Students));
            document.getElementById("boxinput2").style.visibility = "hidden"
            show5();
        });
    }
    else{
        alert("your task is not true")
    }
}

// ADD FEEDBACK
function addfeed(){ 
    var stufeedId = studentsId
    let studFeed = document.getElementById('Studfedd')
    Students.map((ele) =>{
    
            //Find index of specific object using findIndex method.    
            feedloc = Students.findIndex((ele => ele.id == stufeedId ));

            //Update object's name property.
            Students[feedloc].feed = studFeed.value
            Students[feedloc].coachfeed = name1

            localStorage.setItem("Students", JSON.stringify(Students));
            document.getElementById("boxinput3").style.visibility = "hidden"
            show6();
        });
}

// show bio edite 
edittrain = () => {
    document.getElementById("text").style.display = "block"
    document.getElementById("emaill1").style.display = "block"
    document.getElementById("phonee1").style.display = "block"
    document.getElementById("biobox").style.display = "block"
    document.getElementById("biobut").style.display = "block"

    document.getElementById("profname").style.display = "none"
    document.getElementById("email").style.display = "none"
    document.getElementById("phone").style.display = "none"
    document.getElementById("biotext").style.display = "none"
}

savebio = () => {
    var updatename = document.getElementById("text")
    var updatemail = document.getElementById("emaill1")
    var updatephone = document.getElementById("phonee1")

    var biotext = document.getElementById("biobox").value
    localStorage.setItem(name1, JSON.stringify(biotext))
    var bio = JSON.parse(localStorage.getItem(name1))
    document.getElementById("biotext").innerHTML = bio

    var idtrain = trid
    Trainers.map((ele) =>{
        //Find index of specific object using findIndex method.    
        feedloc = Trainers.findIndex((ele => ele.id == idtrain ));
        console.log(feedloc)
        //Update object's name property.
        Trainers[feedloc].name = updatename.value
        Trainers[feedloc].mail = updatemail.value
        Trainers[feedloc].phone = updatephone.value
    
        localStorage.setItem("Trainers", JSON.stringify(Trainers));
        document.getElementById("boxinput2").style.visibility = "hidden"
        show2();
    });

    document.getElementById("text").style.display = "none"
    document.getElementById("emaill1").style.display = "none"
    document.getElementById("phonee1").style.display = "none"
    document.getElementById("biobox").style.display = "none"
    document.getElementById("biobut").style.display = "none"

    document.getElementById("profname").style.display = "block"
    document.getElementById("email").style.display = "block"
    document.getElementById("phone").style.display = "block"
    document.getElementById("biotext").style.display = "block"

    document.getElementById("profname").innerHTML = updatename.value
    document.getElementById("email").innerHTML = updatemail.value
    document.getElementById("phone").innerHTML = updatephone.value
}

document.getElementById("biotext").innerHTML = JSON.parse(localStorage.getItem(name1))