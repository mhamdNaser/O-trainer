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
function news2(){
newsTwo=[`We would like to thank our colleagues at Orange Jodan for their endless support in delivering many training courses and programs for the second cohort students of the Coding Academy and also we would like to thank our partners from different companies for their contenious support`,`Discover more about the second cohort graduation projects. The students did their projects with enthusiasm and passion to learn more, also they submitted their graduation projects and deliver it on time.`]

for (i=0;i<=newsTwo.length;i++){
    i = Math.floor((Math.random() * 2))
    return  newsTwo[i]
    
}
}
function changeNews2() {

    document.getElementById(`news2`).innerHTML = news2();
}

setInterval(changeNews2, 1000); 


//--------------------------------------


let Students = JSON.parse(localStorage.getItem("Students")) || []
let Trainers = JSON.parse(localStorage.getItem("Trainers"));
const name1 = JSON.parse(sessionStorage.getItem("loname"))
const mail = JSON.parse(sessionStorage.getItem("lomail"))
const phonee = JSON.parse(sessionStorage.getItem("lophone")) 

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

// add anew student
addstud = () => {
    document.getElementById('studcard').style.visibility = "visible"
}

saveStudent = () => {
    const stuId = document.getElementById('Studentid') 
    const stuName = document.getElementById('StudentName')
    var obj1 = {
        id: stuId.value, 
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
    Home = document.getElementById("home")
    Home.style.display = "flex"
    stud.style.display = "none"
    atten.style.display = "none"
    task.style.display = "none"
    feed.style.display = "none"
    profile.style.display = "none"
    Home.class = "active"
}

// TRAINER PROFILE
show2 = () =>{
    document.getElementById('traincard').innerHTML = name1
    document.getElementById('profname').innerHTML =  name1
    document.getElementById('email').innerHTML =  mail
    document.getElementById('phone').innerHTML =  phonee

    Trainers.map((ele) =>{

        if ( ele.name == "mona" ){
            document.getElementById("trainerphoto").src = "./icon/mona.jpeg"
        }
        else if( ele.name == "alaa" ){
            document.getElementById("trainerphoto").src = "./icon/alaa.jpeg"
        }
        else{
            document.getElementById("trainerphoto").src = "./icon/icon-256x256.png"
        }
    });
    
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
    table+="<tr><caption>STUDENT DATA</caption></tr>"

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
    table+="<tr><caption>ATTENDANCE</caption></tr>"
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
    table+="<tr><caption>ASSIGNMENTS</caption></tr>"

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
    table+="<tr><caption>FEEDBACK</caption></tr>"

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
        table += "<td>" + `<button id='butfeed' onclick='shwfeed(${ele.id})'>add</button>` + "</td>" ;
        table += "<tr>"
    });
    table += "</tr>"
    document.getElementById('feed-back').innerHTML = table;
}

show7 = () => { window.open('./index.html')}

shwatten = (id) => {
    studentsId = id
    document.getElementById("boxinput1").style.visibility = "visible"
    return studentsId
}


shwfeed = (id) => {
    studentsId = id
    document.getElementById("boxinput3").style.visibility = "visible"
    return studentsId
}

// DELET STUDENT NOT COMPLETE
shwtask = (id) => {
    studentsId = id
    document.getElementById("boxinput2").style.visibility = "visible"
    return studentsId
}

function deletStudent(id){ 
    studentsId = id
    //Find index of specific object using findIndex method.    
    const index = Students.findIndex((ele => ele.id == studentsId ));

    //Update object's name property.
    Students.splice(index , 1)


    localStorage.setItem("Students", JSON.stringify(Students));
    document.getElementById("boxinput1").style.visibility = "visible"
    show3();
}


// ADD ATTENDANCE
function addatten(){ 
    var stuattenId = studentsId
    var stuatten = document.getElementById('studattend')
    var ALLatten = document.getElementById('allDay')
    var coachatten = document.getElementById('coatatten')
    Students.map((ele) =>{
    
            //Find index of specific object using findIndex method.    
            feedloc = Students.findIndex((ele => ele.id == stuattenId ));


            //Update object's name property.
            Students[feedloc].atten = stuatten.value
            Students[feedloc].totalday = ALLatten.value
            Students[feedloc].coachATTE = coachatten.value


            localStorage.setItem("Students", JSON.stringify(Students));
            document.getElementById("boxinput1").style.visibility = "visible"
            show4();
        });
}

// ADD TASKS
function addtask(){ 
    var stuTASKId = studentsId
    var stuTASK = document.getElementById('studtask')
    var ALLTASK = document.getElementById('allTask')
    var coachTASK = document.getElementById('coattask')
    Students.map((ele) =>{
    
            //Find index of specific object using findIndex method.    
            feedloc = Students.findIndex((ele => ele.id == stuTASKId ));

            //Update object's name property.
            Students[feedloc].task = stuTASK.value
            Students[feedloc].totaltask = ALLTASK.value
            Students[feedloc].coacTask = coachTASK.value

            //Log object to console again.
            console.log("After update: ", Students[feedloc])

            localStorage.setItem("Students", JSON.stringify(Students));
            document.getElementById("boxinput2").style.visibility = "hidden"
            show5();
        });
}

// ADD FEEDBACK
function addfeed(){ 
    var stufeedId = studentsId
    let studFeed = document.getElementById('Studfedd')
    let coachFeed = document.getElementById('cofeed')
    Students.map((ele) =>{
    
            //Find index of specific object using findIndex method.    
            feedloc = Students.findIndex((ele => ele.id == stufeedId ));

            //Update object's name property.
            Students[feedloc].feed = studFeed.value
            Students[feedloc].coachfeed = coachFeed.value

            localStorage.setItem("Students", JSON.stringify(Students));
            document.getElementById("boxinput3").style.visibility = "hidden"
            show6();
        });
}

// show bio edite 
edittrain = () => {
    document.getElementById("biobox").style.display = "block"
    document.getElementById("biobut").style.display = "block"
    document.getElementById("biotext").style.display = "none"
    
}

savebio = () => {
    var biotext = document.getElementById("biobox").value
    localStorage.setItem("bio", JSON.stringify(biotext))
    var bio = JSON.parse(localStorage.getItem("bio"))
    document.getElementById("biotext").innerHTML = bio
    document.getElementById("biotext").style.display = "block"
    document.getElementById("biobox").style.display = "none"
    document.getElementById("biobut").style.display = "none"
}

document.getElementById("biotext").innerHTML = JSON.parse(localStorage.getItem("bio"))