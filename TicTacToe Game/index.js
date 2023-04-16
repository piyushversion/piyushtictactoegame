const boxes = document.querySelectorAll(".box");
const gameinfo = document.getElementById("gameplayerwinnerinfo");
const newgame = document.querySelector(".btn");
const tttbox = document.querySelector(".tictactoebox")

let currentplayer;
let gamegrid;

initgame();

function initgame(){

    currentplayer = 'X';
    gamegrid = ["","","","","","","","",""];
    tttbox.classList.remove("pointer")

    boxes.forEach((value,index)=>{

        boxes[index].innerHTML = "";
        boxes[index].classList.remove("win");
    })
    newgame.classList.remove("active");
    gameinfo.innerText = `Current Player - ${currentplayer}`;
}

newgame.addEventListener('click',initgame);

boxes.forEach((value,index) => {

    value.addEventListener('click',()=>{

        handleclick(index);
    });
})

function handleclick(index){

    if(gamegrid[index]===""){

        boxes[index].innerHTML = currentplayer;
        gamegrid[index]=currentplayer;

        swap();

        checkgameover();
    }
    
}

function swap(){

    if(currentplayer==="X"){

        currentplayer = "O";
    }
    else{

        currentplayer = "X";    
    }

    gameinfo.innerText = `Current Player - ${currentplayer}`;
}


function checkgameover(){

    let answer = "";
    winningposition.forEach((position)=>{

        if((gamegrid[position[0]]!==""||gamegrid[position[1]]!==""||gamegrid[position[2]]!=="") && 
        ((gamegrid[position[0]])===(gamegrid[position[1]])&&(gamegrid[position[1]])===gamegrid[position[2]])){

            if(gamegrid[position[0]]==="X"){

                answer = "X";
            }
            else{

                answer = "O";
            }

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");

            tttbox.classList.add("pointer");
        }

       
    })

    if(answer!=""){

        newgame.classList.add("active")
        gameinfo.innerText = `Winner Player - ${answer}`
        return;
    }

   
    let fillcount = 0;
    gamegrid.forEach((box)=>{

        if(box!=""){

            fillcount++;
        }
    })

    if(fillcount==9){

        gameinfo.innerText = "Game Tied!";
        tttbox.classList.add("pointer");
        newgame.classList.add("active");
    }
}



const winningposition = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]