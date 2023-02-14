function validation()
{
    var username=document.forms.f.fname.value;
    var userpat=/[^A-Z a-z]/; /* regular expression to match username */
    if((username==""))
    {
        alert("Enter your username");
        return false;
    } 
    if(userpat.test(username)) /*to test the pattern*/
    {
        alert("Username must contain only alphabets");
        return false;
    }
    if(username.length <5)
    {
        alert("Name must not be less than 5 characters");
        return false;  
    }

     var email = document.forms.f.email.value;
            var emailpat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+.[a-zA-Z]+$/;/* regular expression to match email */
            if((email==""))
            {
                alert("Enter email");
                return false;
            }            
            if((!emailpat.test(email))) /*to test the pattern*/
            {
                alert("Enter an email address");
                return false;
            } 

            var phone=document.forms.f.phno.value;
            var phpat=/[^0-9]/; /* regular expression to match phone num*/
            if((phone==""))
            {
                alert("Enter phone number");
                return false;
            }
            if(phone=="123456789")
            {
                alert("Enter valid no.");
                return false;
            }
            if((phpat.test(phone)) || (phone.length!=10)) /*to test the pattern*/
            {
                alert("Enter valid 10 digit no.");
                return false;
            }
            var firstpass=document.forms.f.pass.value;
            var secondpass=document.forms.f.confirm_pass.value;
            var p1=/[^A-Za-z0-9]/;
            var p2=/[a-z]/;
            var p3=/[A-Z]/;
            var p4=/[0-9]/; /* regular expression to match strong password*/
            if(firstpass=="" || secondpass=="")
            {
                alert("Password can't be empty!");
                return false;
            }
            if(!p1.test(firstpass) || !p2.test(firstpass) || !p3.test(firstpass) || !p4.test(firstpass)) /*to test the pattern*/
            {
                alert("password should contain all case letters,numbers and special characters");
                return false;
            }
            if(firstpass.length<8)
            {
               alert("Password should not be less than 8 characters");
               return false;
            }
            if(firstpass=="password" || firstpass=="PASSWORD" || firstpass==fname.value)
            {
                alert("enter valid password");
                return false;
            }
            if(firstpass!=secondpass)
            {
                alert("both passwords are not same!");
                return false;
            }
             
        
}