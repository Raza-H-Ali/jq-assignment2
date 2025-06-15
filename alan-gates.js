/* $('.foto').click(function() {
    $('.foto').fadeOut(2000)
  
});
$('.foto').attr().click(function() {
    ('alt-pic is', $(this).attr('alt-pic')).fadeIn(2000);
    }) */
   
   
    //this is hadis cods:

/*    $(document).ready(function () {
  $('img').click(function() {
    const currentSrc = $(this).attr('src');
    const altPic = $(this).attr('alt-pic');
    $(this).attr('src', altPic);
    $(this).attr('alt-pic', currentSrc);
  });
}); */


$('img').click(function () {
  const $img = $(this);
  const altPic = $img.attr('alt-pic');
  const currentSrc = $img.attr('src');
  const original = $img.data('original') || currentSrc;
  $img.fadeOut(500, function () {
    // Toggle image source
    if (currentSrc === original) {
      $img.attr('src', altPic);
    } else {
      $img.attr('src', original);
    }
    $img.fadeIn(500);
  });
  $img.data('original', original);
});




        

