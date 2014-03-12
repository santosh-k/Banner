
$( document).ready(function() {
    
    $("#firstBtn").live("click",function(event) { 
        event.preventDefault();
       // console.log("login form validation");
       
        var form=$('form[name="formOne"]');
        form.validate({
            debug: true,
            rules: {
                text1: {
                            required: true
                         
                    },
                text2: {
                            required: true
                    },
                text3: {
                    required: true,
					email:true
                }
                
            },

            messages: {
                text1: {
                    required: "הודעת שגיאה עניינית"

                },
                text2: {
                    required: "הודעת שגיאה עניינית"
                },
                text3: {
                    required: "הודעת שגיאה עניינית",
					email:"בעייה רצינית עם האימייל"
                }
            },
            submitHandler: function(form) {
                 ///success
                // window.location.href = 'index.html';
                  $("#firstBtn").parents('.info-form').fadeOut(100)
                  $('.suces-box').fadeIn(500)
            }, 
            invalidHandler: function(form) {
                 ///fail
            }, 
            //highlight:highlight ,
            //unhighlight: unhighlight,   
            //errorPlacement: formsErrorPlacement
	});
        form.submit(); 
        return false;
    });
    
    
    
    
  
});


