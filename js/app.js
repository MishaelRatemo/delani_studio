  var u_form = document.getElementById('form_data');
  var uName = document.getElementById('uname');
  var uMail = document.getElementById('umail');
  var uMessage = document.getElementById('umessage');
  var nameErr = document.getElementById('nameErr');
  var mailErr = document.getElementById('mailErr');
  var msgErr = document.getElementById('msgErr');
  var successAlert = document.getElementById('uSuccess');  

  u_form.addEventListener('submit', validate);

  function validate(e) {
    // removeAlert();
    e.preventDefault();  
    var nName = uName.value.trim(); 
    var mMail = uMail.value.trim();
    let mMessage = uMessage.value;    
        
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
              // alert('Thanks you');
              console.log(nName +" "+ mMessage)
                uMessage.style.borderColor='white';
                msgErr.innerHTML=""; 
               // upon successful validation create an alert                        
              var h5 = document.createElement('h5');
              h5.className= "alert alert-success";
              h5.appendChild(document.createTextNode(`Thank you ${nName} We have received your feedback.`));
              var container = document.querySelector('.message');
              var childContainer = document.querySelector('.messageText');
              container.insertBefore(h5,childContainer);

              // document.getElementById('uSuccess').innerHTML=`Thank you ${nName}  We have received your feedback.`; 
              u_form.reset();                        
            }
            // alert to disappear after 3secs
            setTimeout(() => {
              removerAlert();
            }, 4000);                          
}    
function removerAlert() {
  var myAlert =document.querySelector('.alert');
  if (myAlert){
      myAlert.remove();
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
        $(".myborder").css.borderColor('white');
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


