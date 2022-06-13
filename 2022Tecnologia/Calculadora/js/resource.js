function agregaN1(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 1; // += significa lo que es el valor +1
}

function agregaN2(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 2; // += significa lo que es el valor +1
}

function agregaN3(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 3; // += significa lo que es el valor +1
}

function agregaN4(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 4; // += significa lo que es el valor +1
}

function agregaN5(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 5; // += significa lo que es el valor +1
}

function agregaN6(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 6; // += significa lo que es el valor +1
}

function agregaN7(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 7; // += significa lo que es el valor +1
}

function agregaN8(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 8; // += significa lo que es el valor +1
}

function agregaN9(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 9; // += significa lo que es el valor +1
}

function agregaN0(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 0; // += significa lo que es el valor +1
}

function agregaN1(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 1; // += significa lo que es el valor +1
}

function mas(e){
    let res = document.getElementById("res");
    let oculto = document.getElementById("oculto");
    let opera = document.getElementById("opera");
    opera.value = 1;
    oculto.value = res.value;
    res.value = "";
  }

  function menos(e){
    let res = document.getElementById("res");
    let oculto = document.getElementById("oculto");
    let opera = document.getElementById("opera");
    opera.value = 2;
    oculto.value = res.value;
    res.value = "";
  }

function resultado(e){
    let res = document.getElementById("res");
    let oculto = document.getElementById("oculto");
    if (opera.value == 1){
        res.value = parseInt(ocultp.value) + parseInt(res.value);
    }else{
        res.value = parseInt(oculto.value) - parseInt(res.value);
    }
    
    oculto.value = "";
}