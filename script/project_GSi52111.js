function regionimage(object){
    var regimg=document.getElementById("reimg");
    regimg.src=object.value;
}

function runform(form){
    if (date(form) &&  tName(form) && email(form) && uaddress(form)  && check(form))
        {
            
            return true;}

    else
       { return false;}

}

function tName(form){
    var name2= form.elements["uname"];
    if(name2.validity.valueMissing){
        name2.setCustomValidity("Please enter your name");
        return false;
    
    } 
    else {
        name2.setCustomValidity("");
        return true;
    }
}


function email(form){
    var sm1= form.elements["uemail"];
    if(sm1.validity.valueMissing){
        sm1.setCustomValidity("Please enter the your email address");
        return false;
    
    }
    else if(sm1.validity.typeMismatch){
        sm1.setCustomValidity("Email " + sm1.value + " is not in a correct format");
        return false;
        
    
    }

    else {
        sm1.setCustomValidity("");
        return true;
    }
}


function uaddress(form){
    var id1= form.elements["baddress"];
    if(id1.validity.valueMissing){
        id1.setCustomValidity("Please write the Permanent Address");
        return false;
    
    } 
    else {
        id1.setCustomValidity("");
        return true;
    }
}

function check(form){
    var b1= document.querySelector('input[name="treg"]:checked')
    
    var c1= document.getElementById("treg1");
    
    var c2= document.getElementById("treg2");
    var c3= document.getElementById("treg3");
    

    if(b1.length !=0 ){
        c1.setCustomValidity("");
        c2.setCustomValidity("");
        c3.setCustomValidity("");
        return true;
    }
     else{
         c1.setCustomValidity("Please select the package");
         
         c2.setCustomValidity("Please select the package");
         c3.setCustomValidity("Please select the package");
         return false;
     }
}

function date(form){
    var date1= form.elements["sdate"];
    if(date1.validity.valueMissing){
        date1.setCustomValidity("Please enter the date");
        return false;
    
    }
    else if(date1.validity.rangeUnderflow){
        date1.setCustomValidity("Please enter the date greater than December 1,2021");
        
        return false;

    }
    else if(date1.validity.rangeOverflow){
        date1.setCustomValidity("Please enter the date no later than December 31,2022");
        
        return false;

    }

    else {
        date1.setCustomValidity("");
        return true;
    }
}

