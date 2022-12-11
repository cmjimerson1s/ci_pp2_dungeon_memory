const form = document.querySelector('#contact-us');
let subButton = document.getElementById('submit');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.init('Os0hLGRhoHFPHYDO5');
    subButton.value = "Now Submitting";

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
            alert('Failed to Send. Please try again.',);
        });

});
