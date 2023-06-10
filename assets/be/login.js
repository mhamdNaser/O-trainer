var Trainers = JSON.parse(localStorage.getItem("Trainers"));

login = () => {
  const logmail = document.getElementById("mail");
  const password = document.getElementById("pass");

  // Check if the "Remember Me" checkbox is checked
  const rememberMe = document.getElementById("rememberme").checked;

  let compmail = logmail.value;
  let compPass = password.value;

  if (compmail == "" && compPass == "") {
    document.getElementById("err").innerHTML =
      "please inter your email and password";
    console.log(true);
  }
  Trainers.map((e) => {
    if (
      e.mail === compmail &&
      e.password == compPass &&
      compmail !== "" &&
      compPass !== ""
    ) {
      sessionStorage.setItem("loid", JSON.stringify(e.id));
      sessionStorage.setItem("loname", JSON.stringify(e.name));
      sessionStorage.setItem("lomail", JSON.stringify(e.mail));
      sessionStorage.setItem("lophone", JSON.stringify(e.phone));
      sessionStorage.setItem("lophoto", JSON.stringify(e.photo));
      window.open("./trainer.html");
    } else {
      document.getElementById("err").innerHTML =
        "your email or password is not correct";
    }
  });
};
