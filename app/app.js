const backward = document.getElementById('backward');
const forward = document.getElementById('forward');
const main = document.getElementById('mainImg');
const maincount = document.getElementById('maincount');
imgIndex = 1;
main.src = `./images/main/image${imgIndex}.jpg`;
maincount.innerHTML = `${imgIndex}/45`;
backward.addEventListener("click", function() {
    imgIndex--;
    if (imgIndex == 0) {
        imgIndex = 45
    }
    main.src = `./images/main/image${imgIndex}.jpg`;
    maincount.innerHTML = `${imgIndex}/45`;
})
forward.addEventListener("click", function() {
    imgIndex++;
    if (imgIndex == 46) {
        imgIndex = 1
    }
    main.src = `./images/main/image${imgIndex}.jpg`;
    maincount.innerHTML = `${imgIndex}/45`;
})
alert("this site for your phone background image")