// this function update height of footer image depends on document height changes
function updateFooterImg() {
  documentHeight = $(document).height();
  var footerImage = jQuery("#footer_image");

  // get the height for the footer image minus the header image and the marging top
  var height = documentHeight-750-510

  if (height<2000){
  console.log(height)
    $(footerImage).css( { "height" : height} );
  }else{
    $(footerImage).css( { "height" : 2000} );
  }
}

$(document).ready(function(){

  $( window ).resize(function() {

  // get if the window change of size and call updateFooterImag function to resize the height
  updateFooterImg();

    // // depends on the width show nav list or not
    if ($(window).width() > 960) {
      $('nav ul').show();
      $('#logo').show();
    }else{
      $('nav ul').hide();
    }
  });

    // on small screen if click on Menu show list of options
  $('#pull').click(function(e){
    e.preventDefault();
    $('nav ul').slideDown( "slow" );
    $('#logo').hide();

    // if click on one of the options hide the nav list and show logo
    $('nav li a').click(function(){
      $('nav ul').hide();
      $('#logo').show();
    });
  });

  updateFooterImg();
});
