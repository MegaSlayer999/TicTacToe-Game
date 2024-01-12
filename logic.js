console.log("Welcome to Tic Tac Toe");

// Audios 
let music = new Audio("assets/audio/music.mp3")
let ting = new Audio("assets/audio/ting.mp3")
let gameover = new Audio("assets/audio/gameover.mp3")
let turn = "X"
let isgameover = false;
// Turn Change 
function changeturn() {
    if(turn === "X"){
        return "0"
    }
    else if (turn ===" 0"){
        return "X"
    }
    else{
        return "X"
    }
}

//  Check Win
function checkwin() {
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== "" ){
            document.getElementById("turn-info").innerText =  boxtext[e[0]].innerText + " Won !!!";
            isgameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px"
            gameover.play()
            // setTimeout(() => {
            //     resetgame()
            // }, 2000);
        }
        
    })
}
  
//  CHeck Draw
function checkdraw() {
    let text = document.getElementsByClassName("boxtext")
    // Array.from(text).forEach(element=>{
    //     if(element.innerText !== ""){
    //         document.getElementById("turn-info").innerText =  "It's  a  Draw.";
    //         return isgameover = true;
    //     }
    // })
    
    
    
    if(text[0].innerText !== "" && text[2].innerText !== "" && text[3].innerText !== "" && text[4].innerText !== "" && text[5].innerText !== "" && text[6].innerText !== ""&& text[7].innerText !== ""&& text[8].innerText !== ""){
        document.getElementById("turn-info").innerText =  "It's  a  Draw.";
        isgameover = true;

    }
       
            
}



//  Reset code
let reset = document.getElementById("reset-button")
reset.addEventListener("click",(e)=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText = "";
    })
    turn = "X"
    isgameover = false;
    document.getElementById("turn-info").innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
    
    
})

//  Reset Logic 
function resetgame() {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText = "";
    })
    turn = "X"
    isgameover = false;
    document.getElementById("turn-info").innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
}
// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeturn();
            ting.play();
            checkdraw();
            checkwin();

            if(!isgameover){
                document.getElementById("turn-info").innerText = "Turn for " + turn;
            }
            
        }
    })

})