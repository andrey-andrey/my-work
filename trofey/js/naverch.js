$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() >100) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},1000);
 
});
 
});