function selectAuthor(){
    $('.alert').click(function(e){
        e.preventDefault
    
        let idElement = $(this).attr("data-id")
        let nameElement = $(this).attr("data-name")

            $('#result').append(`<input type="text" name="" id="" class="form-control" value="${nameElement}" disabled><input type="hidden" name="USUARIO_IDUSUARIO" id="USUARIO_IDUSUARIO" value=${idElement} />`)

            $('#' + idElement).hide()
        
    })

}


$(document).ready(function() {

    $('#AUTOR').keyup(function(e) {
        e.preventDefault()

        let NOME = `NOME=${$(this).val()}`

       
        if ($(this).val().length >= 3) {


            $('#autores').empty()

            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                data: NOME,
                url: 'src/tipo-usuario/model/find-usuario.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#autores').append(`<div class="alert alert-primary" data-name="${dado.NOME}" data-id="${dado.IDUSUARIO}" role="alert">${dado.NOME}</div>`)
                    }
                    selectAuthor();
                }

            })
        } else{
            $('#autores').empty()
        }


    })
})