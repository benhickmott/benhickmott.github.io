
$('.video-modal').on('hidden.bs.modal', function () {
  var videoiframe =  $(this).find('iframe');
  videoiframe.attr("src", videoiframe.attr("src"));
});


