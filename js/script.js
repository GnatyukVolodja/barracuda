
let swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


$(document).ready(function(){
    $("#dateBlock").click(function(){
        $("#dateBlock").css("display", "none");
        $("#date").css("display", "block");
    });

    $('#carousel').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        stagePadding:50,
        items:1
    });

});



