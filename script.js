var m1;
var m2;


function m2(m1) {

    for (var i = 2; i < m1; i++)
        if (m1 % i === 0) return false;

    return m1 > 1;
}


setInterval(() => {

    m1 = Math.round(Math.random() * 1000)
    document.querySelector(".asd2").textContent = m1

    if (m1 % 2 === 0) {

        document.querySelector(".m3").textContent = "Bu Sayı Çift'tir."
    } else {
        document.querySelector(".m3").textContent = "Bu Sayı Tek'tir."

    }
    if (m2(m1) === true) {

        document.querySelector(".m4").textContent = "Bu Sayı Asal"
        document.querySelector(".m4").setAttribute("style", `background-color:chartreuse;`)
        document.querySelector(".asd").setAttribute("style", `background-color:chartreuse;`)


    } else {

        document.querySelector(".m4").textContent = "Bu Sayı Asal Değil'dir"
        document.querySelector(".m4").setAttribute("style", `background-color:aqua;`)
        document.querySelector(".asd").setAttribute("style", `background-color:aqua;`)
    }

}, 1000);