// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//         var currentScrollPos = window.pageYOffset;
//         if (prevScrollpos > currentScrollPos) {
//                 document.getElementById("navbar").style.top = "0";
//         } else {
//                 document.getElementById("navbar").style.top = "-50px";
//         }
//         prevScrollpos = currentScrollPos;
// }


$(window).scroll(function(){
        $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
      });

$(document).ready(function () {
        // $('body').css('background', $("#one").attr("data-color"));
        $('.btn1').click(function () {
                $('header').hide(300);
        })
        $('#content_body').hide();
        $('.btn1').click(function () {
                $('#content_body').show(300);
        });


});

var one = "#10e88a",
        two = "#7f3995",
        three = "#0d78e7",
        four = "#f88f18",
        five = "#bb6774";

$(window).on("scroll touchmove", function () {
        if ($(document).scrollTop() >= $("#one").position().top) {
                $('body').css('background', $("#one").attr("data-color"));

        };
        if ($(document).scrollTop() > $("#two").position().top) {
                $('body').css('background', $("#two").attr("data-color"))
        };
        if ($(document).scrollTop() > $("#three").position().top) {

                $('body').css('background', $("#three").attr("data-color"))
        };
        if ($(document).scrollTop() > $("#four").position().top) {

                $('body').css('background', $("#four").attr("data-color"))
        };
        if ($(document).scrollTop() >= $("#five").position().top) {
                $('body').css('background', $("#five").attr("data-color"))
        };
});
