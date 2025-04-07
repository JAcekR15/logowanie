
async function login() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;


    const baseURL = `http://localhost:3000`

    const url = `${baseURL}/login/${login}/${password}`;
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
    console.log(data);

}


async function register() {
    const login = document.getElementById("login1").value;
    const password = document.getElementById("password1").value; 
    const password2 = document.getElementById("password2").value; 

    if (password !== password2){
        console.log("Hasła są różne");
    }
    else{
        const baseURL = `http://localhost:3000`

        const url = `${baseURL}/register/${login}/${password}`;
        const data = await fetch(url);
        const response = await data.json();
        console.log(response);
        console.log(data);
    }

}