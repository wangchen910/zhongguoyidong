// 套餐流量包
{
    let swboxs = document.querySelector(".houmian");
    let swas = document.querySelector(".gdt");
    let lts = document.querySelector(".ycz");
    let ris = document.querySelector(".ycy");
    let now = 4;
    let flag = true;
    let dir = "r";
    let st = setInterval(fn, 2000);

    function fn() {
        swboxs.style.transition = "all 2s";
        if (dir == "r") {
            now++;
        } else if (dir === "l") {
            now--;
        }
        swboxs.style.marginLeft = -295 * now + "px";
    }

    swboxs.addEventListener("transitionend", function () {
        if (now === 12) {
            swboxs.style.marginLeft = "-1180px";
            swboxs.style.transition = "none";
            now = 4;
        }
        if (now === 0) {
            swboxs.style.marginLeft = "-2360px";
            swboxs.style.transition = "none";
            now = 8;
        }
        flag = true;
    })
    swas.onmouseover = window.onblur = function () {
        clearInterval(st);
    }
    swas.onmouseout = window.onfocus = function () {
        st = setInterval(fn, 2000);
    }
    ris.onclick = function () {
        dir = "r";
        if (flag) {
            fn();
            flag = false;
        }
    }
    lts.onclick = function () {
        dir = "l";
        if (flag) {
            fn();
            flag = false;
        }
    }
}
// 套餐流量包


{
    let tr = document.querySelector(".row");
    let zu = document.querySelector(".right");
    let yo = document.querySelector(".left");
    let da = document.querySelector(".gonggaobj");
    let now = 1;
    let st = setInterval(fn, 2000)

    function fn(dir = "r") {
        if (dir == "r") {
            now++;
            if (now === 5) {
                now = 1;
            }
        } else if (dir == "l") {
            now--;
            if (now === 0) {
                now = 4;
            }
        }
        tr.style.marginLeft = -500 * now + "px";
    }

    da.onmouseover = function () {
        clearInterval(st);
    }
    da.onmouseout = function () {
        st = setInterval(fn, 2000);
    }
    yo.onclick = function () {
        fn("r");
    }
    zu.onclick = function () {
        fn("l");
    }
}
{
    let banners = document.querySelectorAll(".banner-tu li");
    let lunbos = document.querySelectorAll(".banner-img ol li");
    let da = document.querySelector(".banner-img");
    let now = 0;
    let z = 10;
    let st = setInterval(fn, 3000);
    let flog = true;

    function fn() {
        banners[now].classList.add("leftOut");
        lunbos[now].classList.remove("li1");
        now++;
        if (now === banners.length) {
            now = 0;
        }
        banners[now].classList.add("rightIn");
        lunbos[now].classList.add("li1");
        banners[now].style.zIndex = z++;
    }

    da.onmouseover = function () {
        clearInterval(st)
    }
    window.addEventListener("blur", function () {
        clearInterval(st)
    })
    da.onmouseout = function () {
        st = setInterval(fn, 3000)
    }
    window.addEventListener("focus", function () {
        st = setInterval(fn, 3000)
    })
    banners.forEach(function (val) {
        val.addEventListener("animationend", function () {
            flog = true;
            val.className = "";
        })
    })
    lunbos.forEach(function (val, index) {
        val.onclick = function () {
            if (flog === true) {
                flog = false;
                if (index > now) {
                    banners[now].classList.add("leftOut");
                    banners[index].classList.add("rightIn");
                } else if (index < now) {
                    banners[now].classList.add("rightOut");
                    banners[index].classList.add("leftIn");
                }
                banners[index].style.zIndex = z++;
                lunbos[now].classList.remove("li1");
                lunbos[index].classList.add("li1");
                now = index;
            }
        }
    })
}
