function validation(){
    var flag = 0;
    if(mail.value==""||pass.value=="" ||repass.value==""){
        alert("Fields cannot be empty");
        return false;
    }
    else{
        let regmail = /^([A-Za-z0-9\.-_]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
        let strong = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        let medium= new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        let min = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        let mailerror = document.getElementById("error-mail");
        if((regmail.test(mail.value))==false){
            mailerror.innerHTML = "Invalid email id!";
            return false;
        }
        
            else{
                let passerror = document.getElementById("error-pass");
                if (min.test(pass.value)==false) {
                    passerror.innerHTML = "Password must contain minimum of 8 characters including atleast one uppercase, one lowercase and one number";
                    passerror.style.color = "#fff000";
                    return false;
                }
                else if (strong.test(pass.value)) {
                    passerror.innerHTML = "Strong";
                    passerror.style.color = "green"; 
                }
                else if (medium.test(pass.value)) {
                    passerror.innerHTML = "Medium";
                    passerror.style.color = "orange";
                }
                else {
                    strength.innerHTML = "Weak";
                    passerror.style.color = "red";
                }
                let repasserror = document.getElementById("error-repass");
                if(pass.value!= repass.value){
                    repasserror.innerHTML = "Passwords doesn't match";
                    repasserror.style.color = "#fff000"
                    return false;
                }
                else{
                    repasserror.innerHTML = "Passwords match";
                    repasserror.style.color = "green";
                }
                
            }   
        
    } 
}

