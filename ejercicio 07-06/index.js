window.addEventListener('DOMContentLoaded', function (event) {
    var form_register = document.querySelector('#form-register');
    
    form_register.addEventListener('submit', function (event) {

        var canSubmit = true;
        var input_name = document.querySelector('#input_name');

        if (input_name.value == "") {
            document.querySelector('#name_container .input-error').innerHTML = 'El nombre es obligatorio';
            canSubmit = false;

        } else {
            if (input_name.value.length < 3) {
                document.querySelector('#name_container .input-error').innerHTML = 'El nombre debe tener al menos 3 caracteres';
                canSubmit = false;
            } else {
                document.querySelector('#name_container .input-error').innerHTML = '';
            }
        }

        var input_last_name = document.querySelector('#input_last_name');
        if (input_last_name.value == "") {
            document.querySelector('#last_name_container .input-error').innerHTML = 'El apellido es obligatorio';
            canSubmit = false;
        } else {
            if (input_last_name.value.length < 3) {
                document.querySelector('#last_name_container .input-error').innerHTML = 'El apellido debe tener al menos 3 caracteres';
                canSubmit = false;
            } else {
                document.querySelector('#last_name_container .input-error').innerHTML = '';
            }
        }

        var input_cedula = document.querySelector('#input_cedula');
        if (input_cedula.value == "") {
            document.querySelector('#cedula_container .input-error').innerHTML = 'La cédula es obligatoria';
            canSubmit = false;
        } else {
            if (input_cedula.value.length < 10 || input_cedula.value.length > 10) {
                document.querySelector('#cedula_container .input-error').innerHTML = 'La cedula debe tener 10 dígitos';
                canSubmit = false;
            } else {
                if(isNaN(input_cedula.value)){ 
                    document.querySelector('#cedula_container .input-error').innerHTML = 'La cédula debe contener solo dígitos';
                    canSubmit = false;
                } else {
                    document.querySelector('#cedula_container .input-error').innerHTML = '';
                }    
            }
        }

        //Validar correo

        var input_mail = document.querySelector('#input_email');
        if(input_mail.value == ""){
            document.querySelector('#email_container .input-error').innerHTML = 'El correo es obligatorio'
            canSubmit = false;
        } else {
            var indexOne = input_mail.value.indexOf("@");
            var indexTwo = input_mail.value.indexOf(".");

            if((indexOne < 0 || indexTwo < 0)){
                document.querySelector('#email_container .input-error').innerHTML = 'El correo no tiene los parámetros establecidos'
                canSubmit = false;
            }else{
                document.querySelector('#email_container .input-error').innerHTML = '';
            }
        }

        if(!canSubmit){
            event.preventDefault();
        }

    })

});