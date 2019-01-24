;(function () {
        function checkPass() {
            let pass1 = document.getElementById('password');
            let pass2 = document.getElementById('password-copy');
            let message = document.getElementById('error-nwl');
            let errorMassegColor = "pink";

            if (pass1.value == pass2.value) {
                message.innerHTML = "ok!";

            } else {
                pass2.style.backgroundColor = errorMassegColor;
                message.style.color = errorMassegColor;
                message.innerHTML = " These passwords don't match"
            }
        }

        function sendForm() {
            alert('The date have been submitet');
        }

        function init() {
            checkPass();
            sendForm();

        }

        function checkForm() {
            var button = document.getElementById('submit');
            button.addEventListener("click", init);
        }


        try {
            checkForm();
        } catch (e) {
            console.error(e)
            alert('Error')
        }
    }
)();