$(document).ready(function() {


    //TEST ->ok 可以按一個自動另收一個，但總有一個收不起來
    // $('.contentTitle').on('click',function(){
    //     $('.contentText').slideUp();
    //     $(this).next('.contentText').slideToggle();
    // })

    //TEST ->圖示換不成功
    // $('.contentTitle').on('click',function(){
    //     // 隱藏
    //     $('.contentText').slideUp();
    //     // 展示
    //     $(this).next('.contentText').slideToggle();

    //     // icon換
    //     icon = $(this).find('span')

    //     if (icon.text() !== '+'){
    //         icon.text('+')
    //     }else{
    //         icon.text('-')
    //     }
    // })

    $('.contentTitle').click(function() {        
        $(this).parent().siblings().find('.contentText').slideUp();
        $(this).siblings('.contentText').slideToggle();

        $(this).parent().siblings().find('span').removeClass('active');
        $(this).find('span').toggleClass('active')        
    })

    
})

