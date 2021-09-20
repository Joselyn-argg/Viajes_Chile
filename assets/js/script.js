// Cambio de color del navbar //
$(window).scroll(function() {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-dark");
    } else {
        $("#menu").removeClass("bg-dark");
    }
});
// smooth scroll//
$(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 700, function(){
          window.location.hash = gato;
        });
      }
    });
    $('[data-toggle="popover"]').popover();
  });