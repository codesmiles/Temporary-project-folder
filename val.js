function validate(){
    var password = document.forms['0'].password.value;
    var cpassword = document.forms['0'].cpassword.value;

    var pass_error = document.getElementById('pass_error');
    var pass_error2 = document.getElementById('pass_error2');

    

    if(password.length < 8){
    pass_error.style.display = "block";
    return false;
} 
if(cpassword !== password){
    pass_error2.style.display = "block";
    return false;
}

}
