
var nav_btn = document.querySelector(".nav_btn");
var nav_btns = nav_btn.querySelectorAll("a");
var nav_btm = document.querySelector(".nav_btm");
var nav_lis = nav_btm.querySelectorAll("li");
var over_nav = document.querySelectorAll(".over_nav");

for (var i = 0; i < nav_btns.length; i++) {
    nav_btns[i].setAttribute('index', i)
    over_nav[i].setAttribute('index2', i)
    nav_btns[i].onmouseover = function () {
        var index = this.getAttribute('index');
        nav_lis[index].style.animation = "nav_btm 0.7s forwards";
        for (var j = 0; j < over_nav.length; j++) {
            over_nav[j].style.display = "none";
        }
        over_nav[index].style.display = "block";
    }
    nav_btns[i].onmouseout = function () {
        var index = this.getAttribute('index');
        nav_lis[index].style.animation = "nav_btm2 0.5s forwards";
    }
    over_nav[i].onmouseover = function () {
        this.style.display = "block";
    }
    over_nav[i].onmouseout = function () {
        this.style.display = "none";
    }
}