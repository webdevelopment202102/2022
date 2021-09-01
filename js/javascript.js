var right1 = document.querySelectorAll(".span")[0],
    right2 = document.querySelectorAll(".taller")[0];
right1.onclick = function () {
    'use strict';
    right1.classList.toggle("right1");
    right2.classList.toggle("right2");
};
var onit = document.querySelectorAll(".scroll")[0];
onit.onclick = function nameme() {
    "use strict";
    document.body.scrollTop = 100;
};
window.onscroll = function nameme2() {
    'use strict';
    if (document.body.scrollTop < 200) {
        onit.style.opacity = '0';
    }
    if (document.body.scrollTop > 200) {
        onit.style.opacity = '1';
    }
    
};
var left  = document.querySelectorAll(".leftt")[0],
    uppp  = document.querySelectorAll(".homeimg")[0],
    expl = document.querySelectorAll(".explor")[0],
    right = document.querySelectorAll(".rightt")[0];
left.onclick = function change() {
    'use strict';
    uppp.classList.add("up2");
    uppp.classList.remove("up");
    uppp.classList.remove("up3");
};
right.onclick = function change11() {
    'use strict';
    uppp.classList.remove("up2");
    uppp.classList.remove("up");
    uppp.classList.add("up3");
    
};
expl.onclick = function () {
    'use strict';
    uppp.classList.remove("up2");
    uppp.classList.remove("up3");
    uppp.classList.add("up");
};



/*clintes*/
var slider   = Array.from(document.querySelectorAll(".havethree")),/* هات السلايز الى هانمشي عليها الكلاسات*/
    length   = slider.length,/*هاتلى عددها*/
    nownow      = 1,/*هات العدد الى هانبتدي بيه*/
    goleft  = document.getElementById("golef"),/*زرار الاول */
    goright = document.getElementById("gorig");/*زرار التاني*/
/*creat ul*/
var creatul = document.createElement("ul");
/* creat ul class*/
creatul.setAttribute("id", "ullllll");
/*create loop on the havethree and create li like it*/
var l;
for (l = 1; l <= length; l++) {
    
    /*create li*/
    var lilili = document.createElement("li");
    
    /*create dataindex*/
    lilili.setAttribute("data-index", l);
    lilili.setAttribute("class", "transition");
    lilili.classList.add("pointer");
    /*create content of the li
    lilili.appendChild(document.createTextNode(l));*/
    
    /*append the li inside the ul*/
    creatul.appendChild(lilili);
}
/*append the ul inside the indecators*/
var indect = document.querySelectorAll(".indecator")[0];
indect.appendChild(creatul);
/*get the new created ul*/
var createdededed = document.getElementById("ullllll");
/*call the lililili and click on it*/
var mylists = Array.from(document.querySelectorAll('#ullllll li'));
var o;
for (o = 0; o < mylists.length; o++) {
    mylists[o].onclick = function () {
        "use strict";
        nownow = parseInt(this.getAttribute("data-index"));
        checker();
    };

}
/*trigger the function*/
checker();
/*next*/
goleft.onclick = function () {
    'use strict';
    if (goleft.classList.contains("disabled")) {
        return false;
    } else {
        nownow--;
        checker();
    }
        
};
/*before*/
goright.onclick = function () {
    'use strict';
    if (goright.classList.contains("disabled")) {
        return false;
    } else {
        nownow++;
        checker();
    }
        
};
function checker() {
    'use strict';
    /* شيل كل الكلاات من عليهم الاول*/
    removethemall();
    
    slider[nownow - 1].classList.add("activation");/*حطلى كلاس على وال واحدة من كلهم*/
    createdededed.children[nownow - 1].classList.add("activton");/*حطلى كلاس على وال واحدة من كلهم*/
    
    if (nownow === 1) {
        goleft.classList.add("disabled");
    } else {
        goleft.classList.remove("disabled");
    }
    if (nownow === length) {
        goright.classList.add("disabled");
    } else {
        goright.classList.remove("disabled");
    }
}
function removethemall() {
    'use strict';
    slider.forEach(function (items) {
        items.classList.remove("activation");
    });
    mylists.forEach(function (lost) {
        lost.classList.remove("activton");
    });
}
/*clintes*/

/*disantions*/
var ululliulli11 = document.querySelectorAll(".lilili li")[0],
    ululliulli22 = document.querySelectorAll(".lilili li")[1],
    ululliulli33 = document.querySelectorAll(".lilili li")[2];
var docum1 = document.querySelectorAll(".spaonly")[0],
    docum2 = document.querySelectorAll(".spaonly")[1],
    docum3 = document.querySelectorAll(".spaonly")[2];
ululliulli11.onclick = function () {
    'use strict';
    docum1.classList.add("block");
    docum2.classList.add('none');
    docum2.classList.remove('block');
    docum3.classList.add('none');
     docum3.classList.remove('block');
    
};
ululliulli22.onclick = function () {
    'use strict';
    docum1.classList.add("none");
    docum1.classList.remove("block");
    docum2.classList.add('block');
    docum3.classList.add('none');
    docum3.classList.remove('block');
    
    
};
ululliulli33.onclick = function () {
    'use strict';
    docum1.classList.add("none");
    docum1.classList.remove("block");
    docum2.classList.add('none');
    docum2.classList.remove('block');
    docum3.classList.add('block');
    
};
    
    
/*disantions*/




/*count*/
var countDownDate = new Date("Sep 30, 2020 13:00:00").getTime();
var x = setInterval(function () {
    
    'use strict';
    
    var now = new Date().getTime();// الخطأ كان القوسين الى مش محطوطين جنب الجيت تايم
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    var doooo = document.getElementById("day");
    doooo.innerHTML = days;
    var  hooo = document.getElementById("hou");
    hooo.innerHTML = hours;
    var miiii = document.getElementById("min");
    miiii.innerHTML = minutes;
    var scccc = document.getElementById("sco");
    scccc.innerHTML = seconds;
    
    if (distance < 0) {
        clearInterval(x);
    }
    
    
}, 1000);
/*count*/