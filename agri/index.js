$(document).ready(function(){
   $('.corselText').addClass("carouselClass");

   
   $(window).scroll(
      function(){
         //get windows Scroll val
         let windowTop = $(window).scrollTop();
         let windowHeight = $(window).height();
         let windowPos= windowTop+windowHeight;
         // get section of element 
         let serviceSec = $('#serviceSec').offset().top;
         if(windowPos >= serviceSec ){
            $('#serviceSec .tittle').addClass("titleTrns");
         }else{
            $('#serviceSec .tittle').removeClass("titleTrns");
         } 

         //Imgae section
         let whyusId = $('#whyusId').offset().top;
         if(windowPos >= whyusId ){
            
            $('#whyusId .whyustext').addClass("titleTrns");
            $('#whyusId .whyusimg').addClass("titleTrnsImg");
         }else{
            $('#whyusId .whyustext').removeClass("titleTrns");
            $('#whyusId .whyusimg').removeClass("titleTrnsImg");
         } 

            //getTouchin section
            let getTouchin = $('#getTouchinSec').offset().top;
            if(windowPos >= getTouchin ){
               $('#getTouchinSec .getTouchin').addClass("titleTrns");
            }else{
               $('#getTouchinSec .getTouchin').removeClass("titleTrns");
            }

            //testimonialsSec section
            let testimonialsSec = $('#testimonialsSec').offset().top-30;
            if(windowPos >= testimonialsSec ){
               console.log("uuu");
               $('#testimonialsSec .tittle').addClass("titleTrns");
            }else{
               $('#testimonialsSec .tittle').removeClass("titleTrns");
            }

             //blogSec section
             let blogSec = $('#blogSec').offset().top;
             if(windowPos >= blogSec ){
                $('#blogSec .tittle').addClass("titleTrns");
             }else{
                $('#blogSec .tittle').removeClass("titleTrns");
             }
      }
   );
})