$(document).ready(function() {

  $('#fullpage').fullpage({
    menu: '.navbar',
    fixedElements: '.navbar_two',
    slidesNavigation: true,
    css3:true,
    sectionsColor: ['#009682', '#00B89F', '#00C2A8', '#00CCB1', '#00CCB1'],
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage']
  });

});
