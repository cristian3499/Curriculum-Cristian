$(document).submite(function () {
    $('#btn-send').click(function () {
        var error = ''
        if ( $('#name').val() == '' ) {
            error = 'El campo del nombre esta vacio'
            document.querySelector('#errorName').innerHTML = error
            $('#name').css("border-color", "red")
        }else{
            document.querySelector('#errorName').innerHTML = ""
        }

        if ( $('#email').val() == '' ) {
            error = 'El campo del correo esta vacio'
            document.querySelector('#errorEmail').innerHTML = error
            
        }else{
            document.querySelector('#errorEmail').innerHTML = ''
        }

        if ( $('#asunto').val() == '' ) {
            error = 'El campo del asunto esta vacio'
            document.querySelector('#errorAsunto').innerHTML = error
        }else{
            document.querySelector('#errorAsunto').innerHTML = ''
        }

        if ( $('#msm').val() == '' ) {
            error = 'El campo del tu mensaje esta vacio'
            document.querySelector('#errorSms').innerHTML = error
        }else{
            document.querySelector('#errorSms').innerHTML = ''
        }

        if (error = '' == false) {
            var msm = ''
        }
    })
})