  var u_form = document.getElementById('form_data');
  var uName = document.getElementById('uname');
  var uMail = document.getElementById('umail');
  var uMessage = document.getElementById('umessage');
  var nameErr = document.getElementById('nameErr');
  var mailErr = document.getElementById('mailErr');
  var msgErr = document.getElementById('msgErr');
  

  u_form.addEventListener('submit', validate);

  function validate(e) {
    e.preventDefault();  
    var nName = uName.value.trim(); 
    var mMail = uMail.value.trim();
    var mMessage = uMessage.value.trim();
     
     
        
            if (nName ===""){
               nameErr.innerHTML="Name is required.";
               uName.style.borderColor='red';
            } else if (mMail ===""){
               nameErr.innerHTML="";
               mailErr.innerHTML=" Enter email address ";
               uMail.style.borderColor='red';
               uName.style.borderColor='white';
               
            }else if (mMessage ===""){
               mailErr.innerHTML="";
               msgErr.innerHTML=" Please we need to hear from you!!";
               uMessage.style.borderColor='red';
               uMail.style.borderColor='white';
            } 
            else {
                uMessage.style.borderColor='white';
                msgErr.innerHTML="";


                // const Success=() => {
                                       
                //    document.getElementById('umessage').innerHTML=" Thank you "+ nName +". We have received your feedback. ";  
                   alert('Thanks you')  ;               
                
                // }

                

                // setTimeout(Success,4000);
                // Success();
            }
                  
}    
        




$();
$(document).ready(function(){
 $(".one").click(function(){ 
      $(".one").fadeIn('slow').hide();
      $("#design").fadeIn().hide();
      $(".service1").show();
    });
    $(".service1").click(function(){
      $(".service1").slideUp();
      $(".one").slideDown();
      $('#design').slideDown();
    });
});

$(document).ready(function(){
$(".two").click(function(){ 
        $(".two").fadeIn('slow').hide();
        $("#development").fadeIn().hide();
        $(".service2").show();
      });
      $(".service2").click(function(){
        $(".service2").slideUp();
        $(".two").slideDown();
        $('#development').slideDown();
      });
});
// toggle for Development
$(document).ready(function(){
 $(".three").click(function(){ 
        $(".three").fadeIn('slow').hide();
        $("#prod_mgt").fadeIn().hide();
        $(".service3").show();
      });    
        $(".service3").click(function(){
        $(".service3").slideUp();
        $(".three").slideDown();
        $('#prod_mgt').slideDown();
      });
});
  
// Mouse Hover Effects on portfolio
$(document).ready(function(){

        $("#project1").mouseover(function(){
        $("#project1").removeClass('d-none');
          $("#project1-tittle").show();
        }).mouseout(function(){
          $("#project1-tittle").hide();
        });
});

$(document).ready(function(){
    $(".portfolio").mouseover(function(){
      $(".portfolio").css("background","rgba( 55,55,55 .6)");
    }).mouseout(function(){
      $("#project1-tittle").hide();
    });
});


