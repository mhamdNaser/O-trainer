// initial value and defined variable
let Students = JSON.parse(localStorage.getItem("Students")) || [];
let Trainers = JSON.parse(localStorage.getItem("Trainers"));
const trid = JSON.parse(sessionStorage.getItem("loid"));
const name1 = JSON.parse(sessionStorage.getItem("loname"));
const mail = JSON.parse(sessionStorage.getItem("lomail"));
const phonee = JSON.parse(sessionStorage.getItem("lophone"));
const photo = document.getElementById("trainerphoto");
const photo1 = document.getElementById("trainerphoto1");

var studentsId;
var newbio;

document.getElementById("home1").innerHTML = "Hello , " + name1;

Home = document.getElementById("home");
profile = document.getElementById("userProfile");
stud = document.getElementById("student");
atten = document.getElementById("attendance");
task = document.getElementById("task");
feed = document.getElementById("feed");

// transition between section
show = (num) => {
  Home.style.display = "none";
  stud.style.display = "none";
  atten.style.display = "none";
  task.style.display = "none";
  feed.style.display = "none";
  profile.style.display = "none";

  if (num === 1) {
    Home.style.display = "flex";
    Home.class = "active";
    if (name1 == "mona") {
      photo.src = "./assets/icon/mona.jpeg";
    } else if (name1 == "alaa") {
      photo.src = "./assets/icon/alaa.jpeg";
    } else {
      photo.src = "assets/icon/icon-256x256.png";
    }
  } else if (num === 2) {
    profile.style.display = "flex";
    profile.class = "active";
    document.getElementById("traincard").innerHTML = name1;
    document.getElementById("profname").innerHTML = name1;
    document.getElementById("email").innerHTML = mail;
    document.getElementById("phone").innerHTML = phonee;
    document.getElementById("traneridset").innerHTML = "ID : " + trid;

    if (name1 == "mona") {
        photo1.src = "./assets/icon/mona.jpeg";
      } else if (name1 == "alaa") {
        photo1.src = "./assets/icon/alaa.jpeg";
      } else {
        photo1.src = "assets/icon/icon-256x256.png";
      }
  } else if (num === 3) {
    stud.style.display = "flex";
    stud.class = "active";
    var table = "<table>";
    table += `<tr><caption>${name1}</caption></tr>`;
    table += `<tr></tr>`;

    table += "<tr>";
    table += "<th>" + "ID" + "</th>";
    table += "<th>" + "NAME" + "</th>";
    table += "<th>" + "ATTENDANCE" + "</th>";
    table += "<th>" + "TASKE" + "</th>";
    table += "<th>" + "FEEDBACK" + "</th>";
    table += "<th>" + "COACH" + "</th>";
    table += "<th>" + "EDITE" + "</th>";
    table += "<tr>";

    Students.map((ele) => {
      table += "<tr>";
      table += "<td>" + ele.id + "</td>";
      table += "<td>" + ele.name + "</td>";
      table += "<td>" + ele.atten + " &rsaquo; " + ele.totalday + "</td>";
      table += "<td>" + ele.task + " &rsaquo; " + ele.totaltask + "</td>";
      table += "<td>" + ele.feed + "</td>";
      table += "<td>" + ele.coachfeed + "</td>";
      table +=
        "<td>" +
        `<button id='butdele' onclick="deletStudent(${ele.id})">Delete</button>` +
        "</td>";
      table += "<tr>";
    });
    table += "</tr>";
    document.getElementById("student-list").innerHTML = table;
  } else if (num === 4) {
    atten.style.display = "flex";
    atten.class = "active";

    var table = "<table>";
    table += `<tr><caption>${name1}</caption></tr>`;
    table += `<tr></tr>`;

    table += "<tr>";
    table += "<th>" + "ID" + "</th>";
    table += "<th>" + "NAME" + "</th>";
    table += "<th>" + "ABSONT" + "</th>";
    table += "<th>" + "ALL DAY" + "</th>";
    table += "<th>" + "COACH" + "</th>";
    table += "<th>" + "" + "</th>";
    table += "<tr>";

    Students.map((ele) => {
      table += "<tr>";
      table += "<td>" + ele.id + "</td>";
      table += "<td>" + ele.name + "</td>";
      table += "<td>" + ele.atten + "</td>";
      table += "<td>" + ele.totalday + "</td>";
      table += "<td>" + ele.coachATTE + "</td>";
      table +=
        "<td>" +
        `<button id='butfeed' onclick='shwform(${ele.id}, 1)'>add</button>` +
        "</td>";
      table += "<tr>";
    });
    table += "</tr>";
    document.getElementById("attendance-list").innerHTML = table;
  } else if (num === 5) {
    task.style.display = "flex";
    task.class = "active";

    var table = "<table>";
    table += `<tr><caption>${name1}</caption></tr>`;
    table += `<tr></tr>`;

    table += "<tr>";
    table += "<th>" + "ID" + "</th>";
    table += "<th>" + "NAME" + "</th>";
    table += "<th>" + "TASK" + "</th>";
    table += "<th>" + "ALL TASK" + "</th>";
    table += "<th>" + "COACH" + "</th>";
    table += "<th>" + "" + "</th>";
    table += "<tr>";

    Students.map((ele) => {
      table += "<tr>";
      table += "<td>" + ele.id + "</td>";
      table += "<td>" + ele.name + "</td>";
      table += "<td>" + ele.task + "</td>";
      table += "<td>" + ele.totaltask + "</td>";
      table += "<td>" + ele.coacTask + "</td>";
      table +=
        "<td>" +
        `<button id='butfeed' onclick='shwform(${ele.id}, 2)'>add</button>` +
        "</td>";
      table += "<tr>";
    });
    table += "</tr>";
    document.getElementById("task-list").innerHTML = table;
  } else if (num === 6) {
    feed.style.display = "flex";
    profile.class = "active";

    var table = "<table>";
    table += `<tr><caption>${name1}</caption></tr>`;
    table += `<tr></tr>`;

    table += "<tr>";
    table += "<th>" + "ID" + "</th>";
    table += "<th>" + "NAME" + "</th>";
    table += "<th>" + "FEEDBACK" + "</th>";
    table += "<th>" + "COACH" + "</th>";
    table += "<th>" + "" + "</th>";
    table += "<tr>";

    Students.map((ele) => {
      table += "<tr>";
      table += "<td>" + ele.id + "</td>";
      table += "<td >" + ele.name + "</td>";
      table += "<td>" + ele.feed + "</td>";
      table += "<td>" + ele.coachfeed + "</td>";
      table +=
        "<td>" +
        `<button id='butfeed' onclick='shwform(${ele.id})', 3>edit</button>` +
        "</td>";
      table += "<tr>";
    });
    table += "</tr>";
    document.getElementById("feed-back").innerHTML = table;
  } else if (num === 7) {
    sessionStorage.clear();
    window.open("./index.html");
  }
};

// add anew student
addstud = () => {
  document.getElementById("studcard").style.display = "block";
  document.getElementById("StudentName").value = "";
};

// Save New Student
saveStudent = (par) => {
  var stuId = Students.length;
  const stuName = document.getElementById("StudentName");
  if (par === 1 && stuName.value != "") {
    Students.map((ele) => {
      //Find index of specific object using findIndex method.
      feedloc = Students.findIndex((ele) => ele.id == stuId);

      if (ele.id > 0 && ele.id == stuId) {
        stuId = ele.id + 1;
      }
    });
    var obj1 = {
      id: stuId,
      name: stuName.value,
      atten: "default",
      task: "default",
      feed: "default",
      totaltask: "default",
      totalday: "default",
      coacTask: "default",
      coachfeed: "default",
      coachATTE: "default",
    };

    Students.push(obj1);
    localStorage.setItem("Students", JSON.stringify(Students));
    document.getElementById("studcard").style.display = "none";
    show(3);
  } else {
    document.getElementById("studcard").style.display = "none";
  }
};

// View Confirm Delete Form
deletStudent = (id) => {
  document.getElementById("deletcard").style.display = "block";

  studentsId = id;
  return console.log(studentsId);
};

// Confirm Delete Function
suredelet = (num) => {
  if (num === 1) {
    var retudele = studentsId;
    console.log(retudele);

    const index = Students.findIndex((ele) => ele.id == retudele);

    //Update object's name property.
    Students.splice(index, 1);

    localStorage.setItem("Students", JSON.stringify(Students));
    document.getElementById("deletcard").style.visibility = "hidden";
    show(3);
  } else {
    show(3);
    document.getElementById("deletcard").style.visibility = "hidden";
    return id;
  }
};

// View Forms ( Attendance, Task, Feedback)
shwform = (id, num) => {
  if (num === 1) {
    studentsId = id;
    document.getElementById("boxinput1").style.visibility = "visible";
    document.getElementById("studattend").value = "";
    document.getElementById("allDay").value = "";
    return studentsId;
  } else if (num === 2) {
    studentsId = id;
    document.getElementById("boxinput3").style.visibility = "visible";
    document.getElementById("Studfedd").value = "";
    return studentsId;
  } else if (num === 3) {
    studentsId = id;
    document.getElementById("boxinput2").style.visibility = "visible";
    document.getElementById("studtask").value = "";
    document.getElementById("allTask").value = "";
    return studentsId;
  }
};

// ADD Attendance
addatten = () => {
  var stuattenId = studentsId;
  var stuatten = document.getElementById("studattend");
  var ALLatten = document.getElementById("allDay");
  if (stuatten.value >= ALLatten.value) {
    Students.map((ele) => {
      //Find index of specific object using findIndex method.
      feedloc = Students.findIndex((ele) => ele.id == stuattenId);

      //Update object's name property.
      Students[feedloc].atten = stuatten.value;
      Students[feedloc].totalday = ALLatten.value;
      Students[feedloc].coachATTE = name1;

      localStorage.setItem("Students", JSON.stringify(Students));
      document.getElementById("boxinput1").style.visibility = "hidden";
      show(4);
    });
  } else {
    alert("your task is not true");
  }
}

// ADD Tasks
addtask = () => {
  var stuTASKId = studentsId;
  var stuTASK = document.getElementById("studtask");
  var ALLTASK = document.getElementById("allTask");
  if (stuTASK.value >= ALLTASK.value) {
    Students.map((ele) => {
      //Find index of specific object using findIndex method.
      feedloc = Students.findIndex((ele) => ele.id == stuTASKId);

      //Update object's name property.
      Students[feedloc].task = stuTASK.value;
      Students[feedloc].totaltask = ALLTASK.value;
      Students[feedloc].coacTask = name1;

      //Log object to console again.
      console.log(stuTASK.value);
      console.log(ALLTASK.value);

      localStorage.setItem("Students", JSON.stringify(Students));
      document.getElementById("boxinput2").style.visibility = "hidden";
      show(5);
    });
  } else {
    alert("your task is not true");
  }
}

// ADD Feedback
addfeed = () => {
  var stufeedId = studentsId;
  let studFeed = document.getElementById("Studfedd");
  Students.map((ele) => {
    //Find index of specific object using findIndex method.
    feedloc = Students.findIndex((ele) => ele.id == stufeedId);

    //Update object's name property.
    Students[feedloc].feed = studFeed.value;
    Students[feedloc].coachfeed = name1;

    localStorage.setItem("Students", JSON.stringify(Students));
    document.getElementById("boxinput3").style.visibility = "hidden";
    show(6);
  });
}

// Edite Trainer Bio And Information
edittrain = () => {
  document.getElementById("text").style.display = "block";
  document.getElementById("phonee1").style.display = "block";
  document.getElementById("biobox").style.display = "block";
  document.getElementById("biobut").style.display = "block";

  document.getElementById("profname").style.display = "none";
  document.getElementById("email").value = mail;
  document.getElementById("phone").style.display = "none";
  document.getElementById("biotext").style.display = "none";
};

savebio = () => {
  var updatename = document.getElementById("text");
  var updatemail = document.getElementById("emaill1");
  var updatephone = document.getElementById("phonee1");

  var biotext = document.getElementById("biobox").value;
  localStorage.setItem(name1, JSON.stringify(biotext));
  var bio = JSON.parse(localStorage.getItem(name1));
  document.getElementById("biotext").innerHTML = bio;

  var idtrain = trid;
  Trainers.map((ele) => {
    //Find index of specific object using findIndex method.
    feedloc = Trainers.findIndex((ele) => ele.id == idtrain);
    console.log(feedloc);
    //Update object's name property.
    Trainers[feedloc].name = updatename.value;
    Trainers[feedloc].mail = updatemail.value;
    Trainers[feedloc].phone = updatephone.value;

    localStorage.setItem("Trainers", JSON.stringify(Trainers));
    document.getElementById("boxinput2").style.visibility = "hidden";
    show(2);
  });

  document.getElementById("text").style.display = "none";
  document.getElementById("emaill1").style.display = "none";
  document.getElementById("phonee1").style.display = "none";
  document.getElementById("biobox").style.display = "none";
  document.getElementById("biobut").style.display = "none";

  document.getElementById("profname").style.display = "block";
  document.getElementById("email").style.display = "block";
  document.getElementById("phone").style.display = "block";
  document.getElementById("biotext").style.display = "block";

  document.getElementById("profname").innerHTML = updatename.value;
  document.getElementById("email").innerHTML = updatemail.value;
  document.getElementById("phone").innerHTML = updatephone.value;
};

document.getElementById("biotext").innerHTML = JSON.parse(
  localStorage.getItem(name1)
);
