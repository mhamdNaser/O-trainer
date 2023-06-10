
// const body = document.getElementsByTagName('body')

openForm = (num) => {
  if( num == 1 ){
    document.getElementById("login").style.display= "block"
  }else if( num == 2 ){
    document.getElementById("register").style.display= "block"
  }
};

cancleform = () => {
    document.getElementById('login').style.display = "none"
    document.getElementById('register').style.display = "none"
}
