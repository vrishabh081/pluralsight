// function for saving data in LS-

const Sign_up = (e)=>
{
    // e.preventDefault();
    let obj = {
        username : document.getElementById("r_text").value,
        email : document.getElementById("r_email").value,
        password : document.getElementById("r_password").value,
    }
    if(obj.username != "" && obj.email != "" && obj.password != "")
    {
        localStorage.setItem("sign_up_data", JSON.stringify(obj));
        location.href = "log_in.html";
        alert("Registered Successfully");
    }
    else
    {
        alert("Fill All Details");
    }
}

const Log_in = ()=>
{
    location.href = "log_in.html";
}

let logo = document.getElementById("logo");
logo.addEventListener("click", function()
{
    location.href = "index.html";
})