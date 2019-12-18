


  let profile = $("h1").offset().top
  $(window).scroll(function () {
   let scrollTop = $(window).scrollTop();
   if (scrollTop>profile){
     $("nav").css({"backgroundColor":" #248faa","transition": "all .5s ease-in-out" , "boxShadow":"2px 2px 10px #4c4c4c"});
     $(".nav-item div").css({"backgroundColor":"#fff"});  //  underline navbar links
     $(".arrow2").css({"display":"flex"});     // arrow appearance
     
   }
   else{
     $("nav").css({"backgroundColor":"transparent", "boxShadow":"none",});
     $(".nav-item div").css({"backgroundColor":"#d1e7ec"});
     $(".arrow2").css({"display":"none"});
 
   }
   })
 
  //  arrow animation
   $(".arrow2").click(function() {
    $("html,body").animate({scrollTop:0},1000)
  });
    
 
 
   
   // function int(){
       
     
     
   //     let query =window.matchMedia("(min-width:992px)")
   //     if(query.matches)
   //     {
   //       //   if the page is wider than 992px
         
   //     }else{
   //          //   if the page is narrower than 992px
   //     }
   // }
 
 
 
   $("nav a").click(function(){
     let aHref = $(this).attr("href");
     let Offset =$(aHref).offset().top;
     $("html,body").animate({scrollTop:Offset},1000)
 
   });
 
   
 
 
 
 
 
 
 
 
 
 
 
   $('nav li a').click(function () {
     $(this).addClass('active').parent().siblings().find("a").removeClass('active');
   })
 
   $(window).scroll(function () {
    $('.block').each(function (){
      if($(window).scrollTop()>=$(this).offset().top){
        var blockId=$(this).attr('id');
        $('nav li a').removeClass('active')
        $('nav li a[href="#'+ blockId +'"]').addClass('active')

      }
    })
    })





    