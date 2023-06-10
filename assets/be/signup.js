register = () => {
  let Trainers = JSON.parse(localStorage.getItem("Trainers")) || [];

  // Get the form values
  const trainId = Trainers.length;
  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const repassword = document.getElementById("repassword").value;

  // Log the form data to the console
  let obj = {
    id: trainId,
    name: username,
    mail: email,
    phone: phone,
    password: password,
  };

  Trainers.push(obj);
  let useCon = /^[a-zA-Z ]/;
  let mailCon =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/;
  let checkPass = /^[A-Za-z]\w{8,31}$/;
  let Mobilcheck = /^([+]\d{2})?\d{10}$/;
  //-----------------------------------------

  let a = false;
  let b = false;
  let c = false;
  let d = false;
  let f = false;

  if (username.match(useCon)) {
    a = true;
  } else {
    document.getElementById("errName").style.display = "block";
    document.getElementById("errName").innerHTML = "**The name is not valid";
  }
  if (email.match(mailCon)) {
    b = true;
  } else {
    document.getElementById("errEmail").style.display = "block";
    document.getElementById("errEmail").innerHTML = "**The email is not valid";
  }
  if (phone.match(Mobilcheck)) {
    c = true;
  } else {
    document.getElementById("errphon").style.display = "block";
    document.getElementById("errphon").innerHTML = "**The phone is not valid";
  }
  if (password.match(checkPass)) {
    d = true;
  } else {
    document.getElementById("match").style.display = "block";
    document.getElementById("match").innerHTML =
      "**The password does not match";
  }
  if (password === repassword) {
    f = true;
  } else {
    document.getElementById("match").style.display = "block";
    document.getElementById("match").innerHTML =
      "**The password does not match";
  }
  if (a == true && b == true && c == true && d == true && f == true) {
    document.getElementById("password").style.borderColor = "";
    document.getElementById("match").style.display = "none";
    document.getElementById("username").style.borderColor = "";
    document.getElementById("errName").style.display = "none";
    document.getElementById("email").style.borderColor = "";
    document.getElementById("errEmail").style.display = "none";
    document.getElementById("phone").style.borderColor = "";

    localStorage.setItem("Trainers", JSON.stringify(Trainers));
  }
  window.reload("./index.html", "_self");
};
