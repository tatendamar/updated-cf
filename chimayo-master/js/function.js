
  $(document).ready(function(){
   setBindings();
  });
   function setBindings(){
     $("nav a").click(function(e){
       e.preventDefault();
       var sectionID =e.currentTarget.id + "Section";

       $("html body").animate({
         scrollTop: $("#" + sectionID).offset().top
       }, 1000)

   });
   }
   $(document).ready(function(){
     $(".menu-icon").on("click", function(){
       $("nav ul").toggleClass("showing");
   });
  })
  function initMap(){
    var Uluru = {lat: -17.8752898, lng: 30.99102019};
    var map = new google.maps.Map(document.getElementById('contactSection'),{

      zoom: 8,
      center: Uluru
    });
    var marker = new google.maps.Marker({
    position: Uluru,
    map:map

  });
  }
  var content = document.getElementById("content");
  var button = document.getElementById("show-more");

  button.onclick = function() {
    if (content.className == "open"){
      //shrink box
      content.className = "";
          button.innerHTML = "show more";

    }else{
      //expand
      content.className = "open";
      button.innerHTML = "show less";
    }
  };
