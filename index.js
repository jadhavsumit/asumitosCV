//----------- Scroll to the top-----------//

const scroll = document.querySelector('#scroll');

scroll.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });

    
});

//----------- Navbar-----------//

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  //----- planning Scroll-----//
function aboutmefun() {
  var elmnt = document.getElementById("about");
  elmnt.scrollIntoView({behavior: "smooth"});
}

function expfunn() {
  var elmnt = document.getElementById("Expirience");
  elmnt.scrollIntoView({behavior: "smooth"});
}

function skillsfunn() {
  var elmnt = document.getElementById("skills");
  elmnt.scrollIntoView({behavior: "smooth"});
}

function contactfunn() {
  var elmnt = document.getElementById("contact");
  elmnt.scrollIntoView({behavior: "smooth"});
}