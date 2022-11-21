var Trainers = JSON.parse(localStorage.getItem("Trainers"));

        function logSubmit(event) {

            console.log('hello from submit');
            let compmail = logmail.value 
            let compPass = password.value
            if (compmail==""&&compPass==""){
                document.getElementById("err").style.display = 'block'
                document.getElementById("err").innerHTML = "**please inter your email and password"
            console.log(true);
            }
            Trainers.map(e => {
                
                if(e.mail === compmail && e.password == compPass && compmail !== "" && compPass !== ""){
                    sessionStorage.setItem("loname", JSON.stringify(e.name));
                    sessionStorage.setItem("lomail", JSON.stringify(e.mail));
                    sessionStorage.setItem("lophone", JSON.stringify(e.phone));
                    sessionStorage.setItem("lophoto", JSON.stringify(e.photo));
                    window.open('./trainer.html')
                    sessionStorage.setItem()
                }
            })
            
            event.preventDefault();
        }

        const logmail = document.getElementById('mail')
        const password = document.getElementById('pass')
        const form = document.getElementById('form')
        form.addEventListener('submit', logSubmit)