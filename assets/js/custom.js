
$( document).ready(function() {
	
 
   $('#sendBtn').click(function(){
   	 
   	       $(this).parents('.vip-users').fadeOut(100);
   	
   	       $('.info-form').fadeIn(500);
   	})  
   	
   $('.return').click(function(){
   	
   	   //alert( $(this).parents().attr('class'))
   	
        $(this).parents('.info-section').fadeOut();
        $(this).parents('.info-section').prev().delay(500).fadeIn(500);
       // $('#text1').val(' ');
       // $('#text2').val(' ');
      //  $('#text3').val(' ');
   	
   })
 $.html5support();
});


