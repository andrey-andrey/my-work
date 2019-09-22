$(document).ready(function () {

   
  $(".dws-form").on("click", ".tab", function () {
   
       
		$(".dws-form").removeClass("active");
		 $(".tab").removeClass("active");
	$(".tab-form").removeClass("active");
      $(this).addClass("active");
      $(".tab-form").eq($(this).index()).addClass("active");
   });
});