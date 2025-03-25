$(document).ready(function(){
    
// TOP鍵
    // let scroll_Top = $(window).scrollTop()
    // if (scroll_Top <= 0){
    //     $('.to-top').hide()
    // }else{
    //     $('.to-top').show()
    // }

    // let scroll_Top = $(window).scrollTop()
    // if (scroll_Top == 0){
    //     $('.to-top').addclass('hide')
    // }else{
    //     $('.to-top').removeclass('hide')
    // }    
    // 上課成品
    //     $('.to-top').click(function() {
    //     $(window).scrollTop(0)
    // })

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();           
        }       
    })

    $('.to-top').click(function(){
        $('html').animate({ scrollTop: 0 }, 400);
    })


// 漢堡選單
    $('.hamburger').click(function() {
        $('.hamburger').toggleClass('active') 
        $('.list').toggleClass('active')
    })

    // 消除CSS中設定的這個hover ==> ul.list  li:hover ul{display: block;} 
    //  不成功
    // $('.list > li').mouseenter(function() {
    //     $(this).removeClass(':hover');
    // });
  

// 手機版的選單點選
    $('.list > li').click(function(e) {
        e.stopPropagation();        
        $(this).children('.dropdown-open').slideToggle();
        $(this).siblings().children('.dropdown-open').slideUp();
    });

    // 點擊其他地方隱藏子選單
    $(document).click(function() {
        $('.dropdown-open').slideUp();
    });

//數量按鈕
/* <div class="btnNum">
        <button class="removeNumber">–</button>
        <input type="text" class="num" value="1">
        <button class="addNumber">+</button>
</div> */



    $('.addNumber').click(function() {
        let quantityInput = $(this).siblings('.num');
        let currentQuantity = parseInt(quantityInput.val());
        quantityInput.val(currentQuantity + 1);
    });

    $('.removeNumber').click(function() {
        let quantityInput = $(this).siblings('.num');
        let currentQuantity = parseInt(quantityInput.val());
        if (currentQuantity > 1) { 
            quantityInput.val(currentQuantity - 1);
        }
    });


    
})
    

    
