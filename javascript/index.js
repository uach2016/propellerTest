// this function update the img footer height if the document change it's height
function updateFooterImg() {
  documentHeight = $(document).height();
  footerImage = jQuery("#footer_image");

  // get the height for the footer image minus the header image and the marging top
  height = documentHeight-750-510

  // img footer height no more than 2000
  if (height<2000){
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
    // update the height and margin after slideDown the menu
    $(footerImage).css( { "margin-top" : "250px" } );
    $(footerImage).css( { "height" : height+40 } );
  });

  updateFooterImg();
});
