$(document).ready(function(){
    $(".span1").click(function(){
    $(".dropdown").slideToggle(500);
    });
    });
    
    $('.sidenav li').click(function(){
    $('.sidenav li').removeClass("active");
    $(this).addClass("active");
    })

    $(".menu-icon").click(function(e) {
    e.preventDefault();
    $(".menu-icon").toggleClass("menuicon");
    $(".main").toggleClass("main-width");
    $(".sidebar").toggleClass("active1");
    $(".sidenav li a").toggleClass("anchor");
    $(".sidenav li").toggleClass("lislide");
    $(".sidenav p").toggleClass("apphide");
    $(".logo span").toggleClass("headspan");
    $(".logo").toggleClass("lm");
    
    });