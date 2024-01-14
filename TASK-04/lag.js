function Show(id)
{
    if(document.getElementById(id).style.display =='none')
    {
        document.getElementById(id).style.display ='block';
    }
    else {
    document.getElementById(id).style.display ='none';
    }
};

function Verify(){
    var userRef ="SuperBob";
    var passRef ="12RobotLove";

    var user = 
    document.getElementById("username").value;
    var pass = document.getElementById("passwprd").value;
    if(user == userRef || pass==passRef){
        alert("connexion")
    }
    else{
        ("It's seem you makw a mistake...")
    }
};