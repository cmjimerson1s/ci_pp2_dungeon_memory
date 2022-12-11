const form = document.querySelector('#contact-us');
let subButton = document.getElementById('submit');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.init('Os0hLGRhoHFPHYDO5');
    subButton.value = "Now Submitting";

    emailjs.sendForm('service_fvwzmql', 'template_pibbt1a', this)
        .then(() => {
            subButton.value = "Sent!";
            console.log('success');
            subButton.setAttribute('disabled', true);

        }, (failure) => {
            console.log(failure);
            alert('Failed to Send. Please try again.',)
        });

});
