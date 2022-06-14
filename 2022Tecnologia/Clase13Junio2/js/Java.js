id = "BotonTriqui1"

setInterval(()=>{
    let aleatorio = Math.round(Math.random() * (35 - 1) + 1,1);
    ant=document.getElementById(id);
    ant.style.background="rgb(255,255,255)";
    id = `BotonTriqui${aleatorio}`;
    let ButtonColor = document.getElementById(id);
    ButtonColor.style.background="red";
    arrays.push(id);
},1000)