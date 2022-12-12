const form = document.querySelector('#contact-us');
let subButton = document.getElementById('submit');
//Below code snipets were taken from emailjs.com tuturoial website//
/** Used the tutorial documents on the emailjs website to add code to collect the form information and send it to me via email */
form.addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.init('Os0hLGRhoHFPHYDO5');
    subButton.value = "Now Submitting";
    //Updates the button text to state if successful or not, and then clears form// 
    emailjs.sendForm('service_fvwzmql', 'template_pibbt1a', this)
        .then(() => {
            subButton.value = "Thank you! Sent Successfully!";
            console.log('success');
            subButton.setAttribute('disabled', true);
            setTimeout(() => {
                location.reload('contact.html');
            }, 1000);
        }, (failure) => {
            console.log(failure);
            alert('Failed to Send. Please try again.');
            location.reload('contact.html');
        });

});
