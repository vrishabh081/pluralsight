let sign_up_data = JSON.parse(localStorage.getItem("sign_up_data")) || [];
console.log(sign_up_data);


document.getElementById("r_sign_in_btn").addEventListener("click", function()
{
    let r_text = document.getElementById("r_text").value;
    let r_password = document.getElementById("r_password").value;

    if(r_text == sign_up_data.username && r_password == sign_up_data.password)
    {
        alert("Successfully log in");
        location.href = "index.html" 
    }
    else
    {
        alert("Wrong input");
    }
})

let logo = document.getElementById("logo");
logo.addEventListener("click", function()
{
    location.href = "index.html";
})