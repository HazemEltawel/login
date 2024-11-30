var inputSignInEmail=document.getElementById("inputSignInEmail");
var inputSignInPass= document.getElementById("inputSignInPass");
var arraysignin=[]

function impty(){
    if(inputSignInEmail.value == "" || inputSignInPass.value == ""){
        return false;
    } else {
        return true;
    }
}

if(localStorage.getItem("user") == null){
    arraysignin = [];
} else {
    arraysignin = JSON.parse(localStorage.getItem("user"));
}

function signIn(){
    if(impty() == false){
        document.getElementById("massage").innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }

    var email = inputSignInEmail.value;
    var password = inputSignInPass.value;

    for (var i = 0; i < arraysignin.length; i++) {
        if(arraysignin[i].email.toLowerCase() == email.toLowerCase() && arraysignin[i].password.toLowerCase() == password.toLowerCase()){
            localStorage.setItem("user", JSON.stringify(arraysignin[i].name));
            document.getElementById("massage").innerHTML = '<span class="text-success m-3">Welcome back, ' + arraysignin[i].name + '!</span>';
            return true;
        }
    }

    if(arraysignin.length == 0){
        arraysignin.push({email: email, password: password, name: "New User"});
        localStorage.setItem("user", JSON.stringify(arraysignin));
        document.getElementById("massage").innerHTML = '<span class="text-success m-3">Success</span>';
        return true;
    } else {
        document.getElementById("massage").innerHTML = '<span class="p-2 text-danger">Incorrect email or password</span>';
    }
}
