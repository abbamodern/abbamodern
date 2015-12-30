(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var offset = window.pageYOffset,
          elBackgrounPos = "0 " + (offset * speed) + "px";
      
      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();