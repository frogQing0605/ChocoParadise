$(document).ready(function() {
    $('img.miniPhoto').click(function(){
        let photoScr = $(this).attr('src')

        $('.mainPhoto').attr('src',photoScr)
    })
})