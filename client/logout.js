const login2 = JSON.parse(localStorage.getItem("login"));
console.log(login);


const h1 = document.createElement("h1")
h1.innerHTML = `Witaj ${login.login} `
const button = document.createElement("button")
button.innerHTML = "logout";
document.body.appendChild(h1)
document.body.appendChild(button)


button.addEventListener("click", ()=>{
    localStorage.removeItem("login")
    window.location.reload()
})
button.style.position = 'fixed';
button.style.top = 10+"px";
button.style.right= 10+"px";