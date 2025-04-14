const login = JSON.parse(localStorage.getItem("login"));
console.log(login);

if(login == null){
    window.location.href = "logowanie.html";
}



if(window.location.pathname =="./admin.html"){
    if (login.uprawnienia != "admin"){
        window.location.href = "user.html"
    }
}

