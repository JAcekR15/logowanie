
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