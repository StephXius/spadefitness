function validate_form(){
    var firstname = document.getElementById('fname').value;
    var lastname =document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;


    if (!firstname){
        alert('Invalid first name');
    }
    
    if (!lastname){
        alert('Invalid last name');
    }
    
    if (!email.includes('@')){
        alert('Invalid email');
    }

    if (!subject){
        alert('No subject was placed');
    }

    else{
        alert('Your form was submitted. We will send a follow up email shortly')
    }
    
}