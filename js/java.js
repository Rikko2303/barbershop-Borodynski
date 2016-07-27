var link = document.querySelector(".login");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-login-close");
var login = popup.querySelector("[name=login]");
      
link.addEventListener("click", function(e) {
        e.preventDefault();
        popup.classList.add("modal-login-on");
        login.focus();

      });

close.addEventListener("click", function(e) {
        e.preventDefault();
        popup.classList.add("closing-animation");
        setTimeout(function(){popup.classList.remove("modal-login-on")}, 200);
        setTimeout(function(){popup.classList.remove("closing-animation")},200);
      });
//карта//
var map = document.querySelector(".map-on");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map-x");

map.addEventListener("click", function(e) {
        e.preventDefault();
        mapPopup.classList.add("modal-map-on");
      });
mapClose.addEventListener("click", function(e) {
        e.preventDefault();
        mapPopup.classList.add("closing-animation2");
        setTimeout(function(){mapPopup.classList.remove("modal-map-on")}, 250);
        setTimeout(function(){mapPopup.classList.remove("closing-animation2")},250);
      });
//ОЖивляем галлерею//

var mas = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"] // массив картинок
var to = 0;  // Счетчик, указывающий на текущую картинки

function right_arrow(e) // Открытие следующей картинки(движение вправо)
{ 
 var obj = document.querySelector(".gallery-image");

  if (to < mas.length-1)  to++ 
   else
     to = 0;
     obj.src = mas[to];  
}

function left_arrow(e) // Открытие предыдущей картинки(движение влево)
{     
 var obj = document.querySelector(".gallery-image");
if (to > 0) to--;
  else
    to = mas.length-1;
    obj.src = mas[to];           
}