function cronometro() {

    var logo = document.getElementById("logo");
    var valor = parseInt(document.getElementById('input1').value);
    var i = valor;
    var img = document.querySelector("#voltorb");
    img.setAttribute('src', 'imgs/gif2.gif');

    if (isNaN(valor)) {
        alert("informe um numero ")
        return
    }


    var cro = setInterval(function () {
        console.log(i);
        document.getElementById("hzin").textContent = "iniciando autodestruição em: " + i;
        i--;
        if (i < 0) {

            img.setAttribute('src', 'imgs/explo.gif');
            clearInterval(cro);
            var apaga = setInterval(function () {
                document.body.style.backgroundColor = "#ffffff";
                img.setAttribute('src', null);
                logo.setAttribute('src', null);
                document.getElementById("btn1").style.display = 'none';
                document.getElementById("input1").style.display = 'none';
                document.getElementById("hzin").textContent = null;
                clearInterval(apaga);
            }, 3155)
        }

    }, 1000)





}


























