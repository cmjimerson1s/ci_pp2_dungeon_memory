emailjs.sendForm('service_fvwzmql', 'template_pibbt1a', this)
        .then(() => {
            submitBtn.value = "Send";
            console.log('succes');
            submitBtn.setAttribute('disabled',true);
            document.querySelector('#thnx-message').style.display="flex";
            thankYouForm.reset();

        }, (err) => {
           console.log('error');
           alert('failed');
        });