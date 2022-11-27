function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="1234")
    {
        alert("login succesfully")
        window.open('\dashboard.html','_blank')
    }
    else
    {
        alert("login failed")
    }
}