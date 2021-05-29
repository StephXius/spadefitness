function validate_form(){
 var email = document.getElementById('ename').value;
 var firstname = document.getElementById('fname').value;
 var lastname =document.getElementById('lname').value;

  //checking using radio buttons
 var gender_trainer = document.querySelector('input[name="trainer_gender"]:checked');
 var gender_choice = document.querySelector('input[name="gender"]:checked');
 var personal_trainer = document.querySelector('input[name="yes_no"]:checked')

//checking using checkboxes buttons
var cardio = document.querySelector('input[name="cardio"]');
var weight_loss = document.querySelector('input[name="weight_loss"]');
var yoga = document.querySelector('input[name="yoga"]');
var weight_training = document.querySelector('input[name="weight_training"]');

if (!cardio.checked && !weight_loss.checked && !yoga.checked && !weight_training.checked){
    alert('Invalid, user has not checked any of the checkboxes')
}

if (!personal_trainer){
    alert('Invalid, No preference for personal trainer selected')
}

if (!gender_choice){
    alert('Invalid, No gender was selected')
}

if (!gender_trainer) {
    alert('Invalid, No gender preference for trainer selected')
}

if (!isNaN(firstname)){
    alert('Invalid first name')
}

if (!isNaN(lastname)){
    alert('Invalid last name')
}

if (!email.includes('@')){
    alert('Invalid email')
}

else{
    alert("Woohoo you are now a member of Spade Fitness. We'll send you a email to follow up with your membership (If you got an invalid alert please correct it and submit your form again)")
}

}
