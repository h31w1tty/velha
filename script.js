
const img = document.createElement('img');
const STATUS = document.querySelector('.status');
var contVez = "x", x = 0, o = 0;
var marca1, marca2, marca3, marca4, marca5, marca6, marca7, marca8, marca9;
var h13,h46,h79,v17,v28,v39,d19,d37;
var status = "Jogando!!";

const box1 = document.querySelector('.quad1');
const box2 = document.querySelector('.quad2');
const box3 = document.querySelector('.quad3');
const box4 = document.querySelector('.quad4');
const box5 = document.querySelector('.quad5');
const box6 = document.querySelector('.quad6');
const box7 = document.querySelector('.quad7');
const box8 = document.querySelector('.quad8');
const box9 = document.querySelector('.quad9');
const placarX = document.querySelector('.placarx');
const placarO = document.querySelector('.placaro');
const bloqueio = document.querySelector('.bloqueio');
vez();
estado();
box1.addEventListener("click", box1clicked);
box2.addEventListener("click", box2clicked);
box3.addEventListener("click", box3clicked);
box4.addEventListener("click", box4clicked);
box5.addEventListener("click", box5clicked);
box6.addEventListener("click", box6clicked);
box7.addEventListener("click", box7clicked);
box8.addEventListener("click", box8clicked);
box9.addEventListener("click", box9clicked);


function box1clicked(){
    if(getComputedStyle(document.querySelector('.quad1 .o')).display == "none" && getComputedStyle(document.querySelector('.quad1 .x')).display == "none"){
        
        if(contVez == "x"){
            document.querySelector('.quad1 .x').style.display = "grid";
            contVez = "o";
            marca1 = "x";
            fim();
            vez();
        }
        else{
            document.querySelector('.quad1 .o').style.display = "grid";
            contVez = "x";
            marca1 = "o";
            fim();
            vez();
        }

    }
}
function box2clicked(){
    if(getComputedStyle(document.querySelector('.quad2 .o')).display == "none" && getComputedStyle(document.querySelector('.quad2 .x')).display == "none"){
        
        if(contVez == "x"){
            document.querySelector('.quad2 .x').style.display = "grid";
            contVez = "o";
            marca2 = "x";
            fim();
            vez();
        }
        else{
            document.querySelector('.quad2 .o').style.display = "grid";
            contVez = "x";
            marca2 = "o";
            fim();
            vez();
        }

    }
}
function box3clicked(){
    if(getComputedStyle(document.querySelector('.quad3 .o')).display == "none" && getComputedStyle(document.querySelector('.quad3 .x')).display == "none"){
        
        if(contVez == "x"){
            document.querySelector('.quad3 .x').style.display = "grid";
            contVez = "o";
            marca3 = "x";
            fim();
            vez();
        }
        else{
            document.querySelector('.quad3 .o').style.display = "grid";
            contVez = "x";
            marca3 = "o";
            fim();
            vez();
        }

    }
}
function box4clicked(){
    if(getComputedStyle(document.querySelector('.quad4 .o')).display == "none" && getComputedStyle(document.querySelector('.quad4 .x')).display == "none"){
        
        if(contVez == "x"){
            document.querySelector('.quad4 .x').style.display = "grid";
            contVez = "o";
            marca4 = "x";
            fim();
            vez();
        }
        else{
            document.querySelector('.quad4 .o').style.display = "grid";
            contVez = "x";
            marca4 = "o";
            fim();
            vez();
        }

    }
}
function box5clicked(){
    if(getComputedStyle(document.querySelector('.quad5 .o')).display == "none" && getComputedStyle(document.querySelector('.quad5 .x')).display == "none"){
        
        if(contVez == "x"){
            document.querySelector('.quad5 .x').style.display = "grid";
            contVez = "o";
            marca5 = "x";
            fim();
            vez();
        }
        else{
            document.querySelector('.quad5 .o').style.display = "grid";
            contVez = "x";
            marca5 = "o";
            fim();
            vez();
        }

    }
}
function box6clicked(){
    if(getComputedStyle(document.querySelector('.quad6 .o')).display == "none" && getComputedStyle(document.querySelector('.quad6 .x')).display == "none"){
        
        if(contVez == "x"){
            document.querySelector('.quad6 .x').style.display = "grid";
            contVez = "o";
            marca6 = "x";
            fim();
            vez();
        }
        else{
            document.querySelector('.quad6 .o').style.display = "grid";
            contVez = "x";
            marca6 = "o";
            fim();
            vez();
        }

    }
}
function box7clicked(){
    if(getComputedStyle(document.querySelector('.quad7 .o')).display == "none" && getComputedStyle(document.querySelector('.quad7 .x')).display == "none"){
        
        if(contVez == "x"){
            document.querySelector('.quad7 .x').style.display = "grid";
            contVez = "o";
            marca7 = "x";
            fim();
            vez();
        }
        else{
            document.querySelector('.quad7 .o').style.display = "grid";
            contVez = "x";
            marca7 = "o";
            fim();
            vez();
        }

    }
}
function box8clicked(){
    if(getComputedStyle(document.querySelector('.quad8 .o')).display == "none" && getComputedStyle(document.querySelector('.quad8 .x')).display == "none"){
        
        if(contVez == "x"){
            document.querySelector('.quad8 .x').style.display = "grid";
            contVez = "o";
            marca8 = "x";
            fim();
            vez();
        }
        else{
            document.querySelector('.quad8 .o').style.display = "grid";
            contVez = "x";
            marca8 = "o";
            fim();
            vez();
        }

    }
}
function box9clicked(){
    if(getComputedStyle(document.querySelector('.quad9 .o')).display == "none" && getComputedStyle(document.querySelector('.quad9 .x')).display == "none"){
        
        if(contVez == "x"){
            document.querySelector('.quad9 .x').style.display = "grid";
            contVez = "o";
            marca9 = "x"
            fim();
            vez();
        }
        else{
            document.querySelector('.quad9 .o').style.display = "grid";
            contVez = "x";
            marca9 = "o";
            fim();
            vez();
        }

    }
}

function vez(){
    if(contVez == "x"){
        document.querySelector('.vez').textContent = "Vez de: X"
    }
    else{
        document.querySelector('.vez').textContent = "Vez de: O"
    }
}

function fim(){
    if(marca1 == "x" && marca2 == "x" && marca3 == "x"){
        document.querySelector('.h13').style.display = "grid";
        status = "fim"
        x++;
    }
    else if(marca1 == "o" && marca2 == "o" && marca3 == "o"){
        document.querySelector('.h13').style.display = "grid";
        status = "fim"
        o++;
    }

    else if(marca4 == "x" && marca5 == "x" && marca6 == "x"){
        document.querySelector('.h46').style.display = "grid";
        status = "fim"
        x++;
    }
    else if(marca4 == "o" && marca5 == "o" && marca6 == "o"){
        document.querySelector('.h46').style.display = "grid";
        status = "fim"
        o++;
    }

    else if(marca7 == "x" && marca8 == "x" && marca9 == "x"){
        document.querySelector('.h79').style.display = "grid";
        status = "fim"
        x++;
    }
    else if(marca7 == "o" && marca8 == "o" && marca9 == "o"){
        document.querySelector('.h79').style.display = "grid";
        status = "fim"
        o++;
    }

    else if(marca1 == "x" && marca4 == "x" && marca7 == "x"){
        document.querySelector('.v17').style.display = "grid";
        status = "fim"
        x++;
    }
    else if(marca1 == "o" && marca4 == "o" && marca7 == "o"){
        document.querySelector('.v17').style.display = "grid";
        status = "fim"
        o++;
    }

    else if(marca2 == "x" && marca5 == "x" && marca8 == "x"){
        document.querySelector('.v28').style.display = "grid";
        status = "fim"
        x++;
    }
    else if(marca2 == "o" && marca5 == "o" && marca8 == "o"){
        document.querySelector('.v28').style.display = "grid";
        status = "fim"
        o++;
    }

    else if(marca3 == "x" && marca6 == "x" && marca9 == "x"){
        document.querySelector('.v39').style.display = "grid";
        status = "fim"
        x++;
    }
    else if(marca3 == "o" && marca6 == "o" && marca9 == "o"){
        document.querySelector('.v39').style.display = "grid";
        status = "fim"
        o++;
    }

    else if(marca1 == "x" && marca5 == "x" && marca9 == "x"){
        document.querySelector('.d19').style.display = "grid";
        status = "fim"
        x++;
    }
    else if(marca1 == "o" && marca5 == "o" && marca9 == "o"){
        document.querySelector('.d19').style.display = "grid";
        status = "fim"
        o++;
    }

    else if(marca3 == "x" && marca5 == "x" && marca7 == "x"){
        document.querySelector('.d37').style.display = "grid";
        status = "fim"
        x++;
    }
    else if(marca3 == "o" && marca5 == "o" && marca7 == "o"){
        document.querySelector('.d37').style.display = "grid";
        status = "fim"
        o++;
    }

    estado();
    placar();
}
//ADICIONAR BLOQUEIO POS FIM

function placar(){
    placarX.textContent=x;
    placarO.textContent=o;
}

function estado(){
    STATUS.textContent = status;
    if(status == "fim"){
        bloqueio.style.display = "grid";
        document.querySelector('button').style.display = "grid"
    }
}

function reset(){
    document.querySelector('button').style.display = "none";
    document.querySelector('.quad1 .x').style.display = "none";
    document.querySelector('.quad2 .x').style.display = "none";
    document.querySelector('.quad3 .x').style.display = "none";
    document.querySelector('.quad4 .x').style.display = "none";
    document.querySelector('.quad5 .x').style.display = "none";
    document.querySelector('.quad6 .x').style.display = "none";
    document.querySelector('.quad7 .x').style.display = "none";
    document.querySelector('.quad8 .x').style.display = "none";
    document.querySelector('.quad9 .x').style.display = "none";
    document.querySelector('.quad1 .o').style.display = "none";
    document.querySelector('.quad2 .o').style.display = "none";
    document.querySelector('.quad3 .o').style.display = "none";
    document.querySelector('.quad4 .o').style.display = "none";
    document.querySelector('.quad5 .o').style.display = "none";
    document.querySelector('.quad6 .o').style.display = "none";
    document.querySelector('.quad7 .o').style.display = "none";
    document.querySelector('.quad8 .o').style.display = "none";
    document.querySelector('.quad9 .o').style.display = "none";
    marca1 = undefined;
    marca2 = undefined;
    marca3 = undefined;
    marca4 = undefined;
    marca5 = undefined;
    marca6 = undefined;
    marca7 = undefined;
    marca8 = undefined; 
    marca9 = undefined;
    document.querySelector('.h13').style.display = "none";
    document.querySelector('.h46').style.display = "none";
    document.querySelector('.h79').style.display = "none";
    document.querySelector('.v17').style.display = "none";
    document.querySelector('.v28').style.display = "none";
    document.querySelector('.v39').style.display = "none";
    document.querySelector('.d19').style.display = "none";
    document.querySelector('.d37').style.display = "none";
    status = "Jogando!!";
    bloqueio.style.display = "none";
    estado();
}