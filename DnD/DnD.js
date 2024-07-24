
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const audio = new Audio('Darkest Dungeon.mp3');
const ded = new Audio('ded.mp3');

function playAudio(){
    audio.load();
    audio.play();
}
function stopAudio(){
    audio.pause();
}

let youded = new Image();
youded.src = 'ded.png';

let Abobrissímo_o_empalador = new Image();
Abobrissímo_o_empalador.src = 'player.png';
let Abobrissímo_o_empalador2 = new Image();
Abobrissímo_o_empalador2.src = 'player2.png';
let Abobrissímo_o_empalador3 = new Image();
Abobrissímo_o_empalador3.src = 'player3.png';

let goblim = new Image();
goblim.src = 'goblim.png';
let purosso = new Image();
purosso.src = 'purosso.png';
let cyclop = new Image();
cyclop.src = 'cy.png';
let dag = new Image();
dag.src = 'dra.png';


let delay = 0;
let m = 0;
let tempo = 0;
let nivel = 1;
let w = 0;
let answered = 0;
let xC = 10;
let cena = 0;
let t1 = 0;
let jf = false
let a = 0;
let tipo_inimigo = 0
let playing = false;

document.getElementById("n").disabled = false;
document.getElementById("btn").disabled = true;

document.getElementById('m').innerHTML = 'You must be agile or you shall succumb to the dungeon!'
document.getElementById('p').innerHTML = 'Stage' + ' ' + nivel;

function addNegative(element){
    document.getElementById('input1').value = document.getElementById('input1').value+element.value;
  }
function addNumber1(element){
    document.getElementById('input1').value = document.getElementById('input1').value+element.value;
  }
function addNumber2(element){
    document.getElementById('input1').value = document.getElementById('input1').value+element.value;
  }
function addNumber3(element){
    document.getElementById('input1').value = document.getElementById('input1').value+element.value;
  }
function addNumber4(element){
    document.getElementById('input1').value = document.getElementById('input1').value+element.value;
  }
function addNumber5(element){
    document.getElementById('input1').value = document.getElementById('input1').value+element.value;
  }
function addNumber6(element){
    document.getElementById('input1').value = document.getElementById('input1').value+element.value;
  }
function addNumber7(element){
    document.getElementById('input1').value = document.getElementById('input1').value+element.value;
  }
function addNumber8(element){
    document.getElementById('input1').value = document.getElementById('input1').value+element.value;
  }
function addNumber9(element){
    document.getElementById('input1').value = document.getElementById('input1').value+element.value;
  }
function addNumber0(element){
    document.getElementById('input1').value = document.getElementById('input1').value+element.value;
  }
function removeNumber(element){
    document.getElementById('input1').value = document.getElementById('input1').value-element.value
}

function irdebase(){
    document.getElementById('input1').value = " ";
}

let inputE = document.getElementById("input1");
inputE.addEventListener("keypress",
 function(event){
if (event.key == "Enter"){
    event.preventDefault();
    document.getElementById("btn").click();
}
});

function time(){

   if (answered != 1 ){
    m++
    if( m =! 0 ){

        ded.play();
        stopAudio();
        playing = false;
        nivel = 1
        morte = true;
        document.getElementById('p').innerHTML = 'Stage' + ' ' + nivel;
        ctx.drawImage(youded,0,0,600,600);
        document.getElementById("n").disabled = false;
        document.getElementById("btn").disabled = true;
        irdebase();
    }
   } 
}

function SelectText(){
    const input = document.getElementById('input1');
    input.focus();
    input.select();
}

function inicio(){

    if(playing == false){
        playing = true;
        playAudio();

        SelectText();
    }

    ded.pause();

    jf = true;

    morte = false; 

    document.getElementById("n").disabled = true;

    clearTimeout(tempo);

    document.getElementById("btn").disabled = false;

    m = 0;
   
    tempo = setTimeout(time, 12000 - nivel*50);

    answered = 0;
    ctx.clearRect(0,0,800,800);

    ctx.drawImage(Abobrissímo_o_empalador,xC,100,250,250);

    if(nivel <= 5){

    let r = Math.round(Math.random()*2);

    let x = Math.round(Math.random()*50);
    let y = Math.round(Math.random()*50);

    function sum(){
        return x+y;
    }
    function sub(){
        return x-y;
    }

    if(r==1){
    
    tipo_inimigo = 1;
    ctx.drawImage(goblim,310,170,150,200);
    w = sum();

    ctx.fillStyle = '#000000';
    ctx.font = '100px algerian';
    ctx.fillText('+', 250,519);
    }

    else{
    tipo_inimigo = 2;
    ctx.drawImage(purosso,310,100,250,130);
    w = sub();

    ctx.fillStyle = '#000000';
    ctx.font = '100px algerian';
    ctx.fillText('-', 280,519);
    }

 ctx.fillStyle = '#000000';
 ctx.font = '69px algerian';
 ctx.fillText(x, 150,505);

 ctx.fillStyle = '#000000';
 ctx.font = '69px algerian';
 ctx.fillText(y, 350,505);
    }

    if(nivel > 5 && nivel <= 10){

        let r = Math.round(Math.random()*2);
    
        let x = Math.round(Math.random()*100);
        let y = Math.round(Math.random()*100);
    
        function sum(){
            return x+y;
        }
        function sub(){
            return x-y;
        }
    
        if(r==1){
        tipo_inimigo = 1;
        ctx.drawImage(goblim,310,170,150,200);
        w = sum();
    
        ctx.fillStyle = '#000000';
        ctx.font = '100px algerian';
        ctx.fillText('+', 250,519);
        }
    
        else{
            tipo_inimigo = 2;
            ctx.drawImage(purosso,310,100,250,130);
            w = sub();
    
        ctx.fillStyle = '#000000';
        ctx.font = '100px algerian';
        ctx.fillText('-', 280,519);
        }
    
     ctx.fillStyle = '#000000';
     ctx.font = '69px algerian';
     ctx.fillText(x, 150,505);
    
     ctx.fillStyle = '#000000';
     ctx.font = '69px algerian';
     ctx.fillText(y, 350,505);
        }

    if(nivel > 10 && nivel < 15){

        let r = Math.round(Math.random()*5);
        
        let x = Math.round(Math.random()*10);
        let y = Math.round(Math.random()*10);

        let a1 = Math.round(Math.random()*10)+1;
        let a2 = Math.round(Math.random()*10);
        let a3 = a1*a2;
        
        function mult(){
            return x*y;
         }
         function divi(){
            return a3/a1;
        }        
        if(r>4){
        tipo_inimigo = 3;
        ctx.drawImage(cyclop,240,100,300,300);
        w = mult();

        ctx.fillStyle = '#000000';
        ctx.font = '69px algerian';
        ctx.fillText('X', 250,510);

        ctx.fillStyle = '#000000';
        ctx.font = '69px algerian';
        ctx.fillText(x, 150,505);
        
        ctx.fillStyle = '#000000';
        ctx.font = '69px algerian';
        ctx.fillText(y, 350,505);
        }
        
        else{
        tipo_inimigo = 4;
        ctx.drawImage(dag,150,10,500,500);
        w = divi();

        ctx.fillStyle = '#000000';
        ctx.font = '69px algerian';
        ctx.fillText('/', 280,510);
        
        ctx.fillStyle = '#000000';
        ctx.font = '69px algerian';
        ctx.fillText(a3, 150,505);
        
        ctx.fillStyle = '#000000';
        ctx.font = '69px algerian';
        ctx.fillText(a1, 350,505);
        }
    }

    if(nivel > 10 && nivel < 15)
    {
        r = 0;
        let r = Math.round(Math.random()*4);
        
        let x = Math.round(Math.random()*10);
        let y = Math.round(Math.random()*10);

        let a1 = Math.round(Math.random()*10)+1;
        let a2 = Math.round(Math.random()*10);
        let a3 = a1*a2;
        
        function mult(){
            return x*y;
         }
         function divi(){
            return a3/a1;
        }        
        if(r>=3){
        ctx.drawImage(cyclop,240,100,300,300);
        tipo_inimigo = 3;
        w = mult();

        ctx.fillStyle = '#000000';
        ctx.font = '69px algerian';
        ctx.fillText('X', 250,510);

        ctx.fillStyle = '#000000';
        ctx.font = '69px algerian';
        ctx.fillText(x, 150,505);
        
        ctx.fillStyle = '#000000';
        ctx.font = '69px algerian';
        ctx.fillText(y, 350,505);
        }
        
        else{
        ctx.drawImage(dag,150,10,500,500);
        tipo_inimigo = 4;
        w = divi();

        ctx.fillStyle = '#000000';
        ctx.font = '69px algerian';
        ctx.fillText('/', 280,510);
        
        ctx.fillStyle = '#000000';
        ctx.font = '69px algerian';
        ctx.fillText(a3, 150,505);
        
        ctx.fillStyle = '#000000';
        ctx.font = '69px algerian';
        ctx.fillText(a1, 350,505);
        }
            }
    if(nivel >= 15 && nivel <= 20){

                let r = Math.round(Math.random()*4);
                
                let x = Math.round(Math.random()*20);
                let y = Math.round(Math.random()*20);
        
                let a1 = Math.round(Math.random()*20)+1;
                let a2 = Math.round(Math.random()*20);
                let a3 = a1*a2;
                
                function mult(){
                    return x*y;
                 }
                 function divi(){
                    return a3/a1;
                }        
                if(r>=3){
                ctx.drawImage(cyclop,240,100,300,300);
                tipo_inimigo = 3;
                w = mult();

                ctx.fillStyle = '#000000';
                ctx.font = '69px algerian';
                ctx.fillText('X', 255,510);
        
                ctx.fillStyle = '#000000';
                ctx.font = '69px algerian';
                ctx.fillText(x, 150,505);
                
                ctx.fillStyle = '#000000';
                ctx.font = '69px algerian';
                ctx.fillText(y, 350,505);
                }
                
                else{
                ctx.drawImage(dag,150,10,500,500);
                tipo_inimigo = 4;
                w = divi();

                ctx.fillStyle = '#000000';
                ctx.font = '69px algerian';
                ctx.fillText('/', 280,510);
                
                ctx.fillStyle = '#000000';
                ctx.font = '69px algerian';
                ctx.fillText(a3, 150,505);
                
                ctx.fillStyle = '#000000';
                ctx.font = '69px algerian';
                ctx.fillText(a1, 350,505);
                }
                    }
                    if(nivel > 20 && nivel<=30){
                        
                        let r = Math.round(Math.random()*10);
                        let x = Math.round(Math.random()*30);
                        let y = Math.round(Math.random()*30);
                
                        let a1 = Math.round(Math.random()*20)+1;
                        let a2 = Math.round(Math.random()*20);
                        let a3 = a1*a2;
                        
                        function mult(){
                            return x*y;
                         }
                         function divi(){
                            return a3/a1;
                        }        
                        function sum(){
                            return x+y;
                        }
                        function sub(){
                            return x-y;
                        }
                    
                        if(r<=3){
                        ctx.drawImage(cyclop,240,100,300,300);
                        tipo_inimigo = 3;
                        w = mult();

                        ctx.fillStyle = '#000000';
                        ctx.font = '69px algerian';
                        ctx.fillText('?', 250,510);
                
                        ctx.fillStyle = '#000000';
                        ctx.font = '69px algerian';
                        ctx.fillText(x, 150,505);
                        
                        ctx.fillStyle = '#000000';
                        ctx.font = '69px algerian';
                        ctx.fillText(y, 350,505);
                        }
                        
                        if(r<=6 && r>3){
                        ctx.drawImage(dag,150,10,500,500);
                        tipo_inimigo = 4;
                        w = divi();

                        ctx.fillStyle = '#000000';
                        ctx.font = '69px algerian';
                        ctx.fillText('?', 280,510);
                        
                        ctx.fillStyle = '#000000';
                        ctx.font = '69px algerian';
                        ctx.fillText(a3, 150,505);
                        
                        ctx.fillStyle = '#000000';
                        ctx.font = '69px algerian';
                        ctx.fillText(a1, 350,505);
                        }

                        if(r==7 || r==8){
                        ctx.drawImage(goblim,310,170,150,200);
                        tipo_inimigo = 1;
                        w = sum();

                         ctx.fillStyle = '#000000';
                         ctx.font = '100px algerian';
                         ctx.fillText('?', 250,519);
                        
                         ctx.fillStyle = '#000000';
                         ctx.font = '69px algerian';
                         ctx.fillText(x, 150,505);
                        
                        
                         ctx.fillStyle = '#000000';
                         ctx.font = '69px algerian';
                         ctx.fillText(y, 350,505);
                        }

                         if(r>8){
                        tipo_inimigo = 2;
                        ctx.drawImage(purosso,310,100,250,130);
                        w = sub();
                         ctx.fillStyle = '#000000';
                         ctx.font = '100px algerian';
                         ctx.fillText('?', 280,519);

                         ctx.fillStyle = '#000000';
                         ctx.font = '69px algerian';
                         ctx.fillText(x, 150,505);
                        
                         ctx.fillStyle = '#000000';
                         ctx.font = '69px algerian';
                         ctx.fillText(y, 350,505);
                         }
             }

             if(nivel > 30){
                        
                let r = Math.round(Math.random()*10);
                let x = Math.round(Math.random()*20 + ((nivel-20)*5));
                let y = Math.round(Math.random()*20 + ((nivel-20)*5));
        
                let a1 = Math.round(Math.random()*20 + (nivel-20))+1;
                let a2 = Math.round(Math.random()*20 + (nivel-20));
                let a3 = a1*a2;
                
                function mult(){
                    return x*y;
                 }
                 function divi(){
                    return a3/a1;
                }        
                function sum(){
                    return x+y;
                }
                function sub(){
                    return x-y;
                }
            
                if(r<=3){
                ctx.drawImage(cyclop,240,100,300,300);
                tipo_inimigo = 3;
                w = mult();
                ctx.fillStyle = '#000000';
                ctx.font = '69px algerian';
                ctx.fillText('?', 290,510);
        
                ctx.fillStyle = '#000000';
                ctx.font = '69px algerian';
                ctx.fillText(x, 150,505);
                
                ctx.fillStyle = '#000000';
                ctx.font = '69px algerian';
                ctx.fillText(y, 350,505);
                }
                
                if(r<=6 && r>3){
                ctx.drawImage(dag,150,10,500,500);
                tipo_inimigo = 4;
                w = divi();
                ctx.fillStyle = '#000000';
                ctx.font = '69px algerian';
                ctx.fillText('?', 290,510);
                
                ctx.fillStyle = '#000000';
                ctx.font = '69px algerian';
                ctx.fillText(a3, 120,505);
                
                ctx.fillStyle = '#000000';
                ctx.font = '69px algerian';
                ctx.fillText(a1, 350,505);
                }

                if(r==7 || r==8){
                ctx.drawImage(goblim,310,170,150,200);
                tipo_inimigo = 1;
                w = sum();
                 ctx.fillStyle = '#000000';
                 ctx.font = '69px algerian';
                 ctx.fillText('?', 290,510);
                
                 ctx.fillStyle = '#000000';
                 ctx.font = '69px algerian';
                 ctx.fillText(x, 150,505);
                
                
                 ctx.fillStyle = '#000000';
                 ctx.font = '69px algerian';
                 ctx.fillText(y, 350,505);
                }

                 if(r>8){
                tipo_inimigo = 2;
                ctx.drawImage(purosso,310,100,250,130);
                w = sub();
                 ctx.fillStyle = '#000000';
                 ctx.font = '69px algerian';
                 ctx.fillText('?', 290,510);

                 ctx.fillStyle = '#000000';
                 ctx.font = '69px algerian';
                 ctx.fillText(x, 150,505);
                
                 ctx.fillStyle = '#000000';
                 ctx.font = '69px algerian';
                 ctx.fillText(y, 350,505);
                 }
     }

     if(nivel == 42){
        document.getElementById('m').innerHTML = 'Obrigado por jogar! Direção: Ilan Jordan// Desenvolvimento: Ilan Jordan && Augusto Rodrigues Julio de Oliveira// Direção de arte: Jopply com auxílio de Ilan Jordan// Tutor: Mariz'
     }
     else{
        document.getElementById('m').innerHTML = 'You must be agile or you shall succumb to the dungeon!'
     }
 }
function check(){

    SelectText();

    jf = false;
    document.getElementById("btn").disabled = true;
    document.getElementById("n").disabled = false;
    ctx.clearRect(0,400,600,600);

   a = document.getElementById('input1').value *1;

   //a==w

   //aa=1
    if( a==w // ||
       // aa==1
        ){

        t1 = new Date;
        cena = 1;
        nivel++
        document.getElementById('p').innerHTML = 'Stage' + ' ' + nivel;
        answered = 1;
        irdebase();
        drawbig();
       

    }
    else{
         if( m =! 0){

            ded.load();
            ded.play();
            stopAudio();
            playing = false;
            nivel = 1
            morte = true;
            document.getElementById('p').innerHTML = 'Stage' + ' ' + nivel;
            ctx.drawImage(youded,0,0,600,600)
            document.getElementById("btn").disabled = true;
            document.getElementById("n").disabled = false;
            irdebase();
        }  
    }
}


function draw(){
    if(xC <= 130){
        xC = xC + 10;
        ctx.clearRect(0,0,420,350);
        ctx.globalAlpha=(0.4);
        ctx.drawImage(Abobrissímo_o_empalador,xC-15,100,250,250);
        ctx.globalAlpha=(0.6);
        ctx.drawImage(Abobrissímo_o_empalador,xC-10,100,250,250);
        ctx.globalAlpha=(0.8);
        ctx.drawImage(Abobrissímo_o_empalador,xC-5,100,250,250);
        ctx.globalAlpha= 1;
        ctx.drawImage(Abobrissímo_o_empalador,xC,100,250,250);
        t1 = new Date;
    }
    else{
        cena = 2
    }
    
}

function espada(){
    ctx.clearRect(0,0,600,350);
    ctx.drawImage(Abobrissímo_o_empalador2,xC,100,250,250);
    t1 = new Date;
    cena = 3

}

function espada2(){
    ctx.clearRect(0,0,600,350);
    ctx.drawImage(Abobrissímo_o_empalador3,xC-30,100,250,250);
    t1 = new Date;
    cena = 4

}

function espada3(){
    ctx.clearRect(0,0,600,420);
    ctx.drawImage(Abobrissímo_o_empalador2,xC,100,250,250);
    t1 = new Date;
    cena = 5
    
}

function volta(){

    if(xC >= 10){
    xC = xC - 10;
    ctx.clearRect(0,0,450,350);
    ctx.globalAlpha=(0.4);
    ctx.drawImage(Abobrissímo_o_empalador,xC+15,100,250,250);
    ctx.globalAlpha=(0.6);
    ctx.drawImage(Abobrissímo_o_empalador,xC+10,100,250,250);
    ctx.globalAlpha=(0.8);
    ctx.drawImage(Abobrissímo_o_empalador,xC+5,100,250,250);
    ctx.globalAlpha= 1;
    ctx.drawImage(Abobrissímo_o_empalador,xC,100,250,250);
    t1 = new Date;
    
    }
    else{
        ctx.clearRect(0,0,600,350);
        ctx.drawImage(Abobrissímo_o_empalador,xC,100,250,250);
        
    }
}

function drawbig(){

    let h1 = t1.getTime();
    let t2 = new Date;
    let h2 = t2.getTime()-h1;

    if(cena == 1 && h2>15){
    draw();
    }
    if(cena == 2){
    espada();
    }
    if(cena == 3){
    espada2();
    }
    if(cena == 4 && h2>=200){
    tipo_inimigo = 0
    espada3();
    }
    if(cena == 5 && h2>20){
    volta();
    }
    if(h2>690 && jf== false){
        inicio();
        jf = true
    }
    if( morte == true ){
    ctx.drawImage(youded,0,0,600,600);
    }
    if(tipo_inimigo == 1){
    ctx.drawImage(goblim,310,170,150,200);
    }
    if(tipo_inimigo == 2){
    ctx.drawImage(purosso,310,100,250,130);
    }
    if(tipo_inimigo == 3){
    ctx.drawImage(cyclop,240,100,300,300);
    }
    if(tipo_inimigo == 4){
    ctx.drawImage(dag,150,10,500,500);
    }
    if( morte == true ){
    ctx.clearRect(0,0,690,690)
    ctx.drawImage(youded,0,0,600,600);
    }
    else{
    }
    requestAnimationFrame(drawbig);
}