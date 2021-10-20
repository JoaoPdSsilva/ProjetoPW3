function selectAuthor(){
    $('.autor').click(function(e){
        e.preventDefault
        alert("Click")
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
                        $('#autores').append(`<input type="text" name="" data-id="${dado.IDUSUARIO}" class="form-control autor" value="${dado.NOME}" disabled>`)
                    }
                }

            })

            selectAuthor()
        } else{
            $('#autores').empty()
        }


    })
})