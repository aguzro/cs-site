var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop <= 100 ) {
        this.console.log("entre ctm!");
        myNav.classList.add("nav-colored");
        myNav.classList.remove("bg-transparent");
    } 
    else {
      myNav.classList.add("bg-transparent");
      myNav.classList.remove("nav-colored"); 
    }
};