$(document).ready(function() {

    $(document).on("scroll",function(){
      if($(document).scrollTop()>100){
        $("header").removeClass("large").addClass("small");
      } else{
        $("header").removeClass("small").addClass("large");
      }
    });
  $('#fullpage').fullpage({
    menu: '.navbar',
    slidesNavigation: true,
    css3:true,
    sectionsColor: ['#009682', '#00B89F', '#00C2A8', '#00CCB1'],
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    afterRender: function(){},
    fixedElements: 'header',
    scrollBar:true
  });
});
